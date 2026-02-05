package cj;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Build;
import j$.time.ZoneOffset;
import j$.time.format.DateTimeFormatter;
import j$.util.DateRetargetClass;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: a  reason: collision with root package name */
    private final SharedPreferences f7657a;

    public k(Context context, String str) {
        this.f7657a = context.getSharedPreferences("FirebaseHeartBeat" + str, 0);
    }

    private synchronized void a() {
        try {
            long j10 = this.f7657a.getLong("fire-count", 0L);
            String str = "";
            String str2 = null;
            for (Map.Entry<String, ?> entry : this.f7657a.getAll().entrySet()) {
                if (entry.getValue() instanceof Set) {
                    for (String str3 : (Set) entry.getValue()) {
                        if (str2 != null && str2.compareTo(str3) <= 0) {
                        }
                        str = entry.getKey();
                        str2 = str3;
                    }
                }
            }
            HashSet hashSet = new HashSet(this.f7657a.getStringSet(str, new HashSet()));
            hashSet.remove(str2);
            this.f7657a.edit().putStringSet(str, hashSet).putLong("fire-count", j10 - 1).commit();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private synchronized String d(long j10) {
        if (Build.VERSION.SDK_INT >= 26) {
            return DateRetargetClass.toInstant(new Date(j10)).atOffset(ZoneOffset.UTC).toLocalDateTime().format(DateTimeFormatter.ISO_LOCAL_DATE);
        }
        return new SimpleDateFormat("yyyy-MM-dd", Locale.UK).format(new Date(j10));
    }

    private synchronized String e(String str) {
        for (Map.Entry<String, ?> entry : this.f7657a.getAll().entrySet()) {
            if (entry.getValue() instanceof Set) {
                for (String str2 : (Set) entry.getValue()) {
                    if (str.equals(str2)) {
                        return entry.getKey();
                    }
                }
                continue;
            }
        }
        return null;
    }

    private synchronized void h(String str) {
        try {
            String e10 = e(str);
            if (e10 == null) {
                return;
            }
            HashSet hashSet = new HashSet(this.f7657a.getStringSet(e10, new HashSet()));
            hashSet.remove(str);
            if (hashSet.isEmpty()) {
                this.f7657a.edit().remove(e10).commit();
            } else {
                this.f7657a.edit().putStringSet(e10, hashSet).commit();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private synchronized void m(String str, String str2) {
        h(str2);
        HashSet hashSet = new HashSet(this.f7657a.getStringSet(str, new HashSet()));
        hashSet.add(str2);
        this.f7657a.edit().putStringSet(str, hashSet).commit();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void b() {
        try {
            SharedPreferences.Editor edit = this.f7657a.edit();
            int i10 = 0;
            for (Map.Entry<String, ?> entry : this.f7657a.getAll().entrySet()) {
                if (entry.getValue() instanceof Set) {
                    String d10 = d(System.currentTimeMillis());
                    String key = entry.getKey();
                    if (((Set) entry.getValue()).contains(d10)) {
                        HashSet hashSet = new HashSet();
                        hashSet.add(d10);
                        i10++;
                        edit.putStringSet(key, hashSet);
                    } else {
                        edit.remove(key);
                    }
                }
            }
            if (i10 == 0) {
                edit.remove("fire-count");
            } else {
                edit.putLong("fire-count", i10);
            }
            edit.commit();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized List c() {
        ArrayList arrayList;
        try {
            arrayList = new ArrayList();
            for (Map.Entry<String, ?> entry : this.f7657a.getAll().entrySet()) {
                if (entry.getValue() instanceof Set) {
                    HashSet hashSet = new HashSet((Set) entry.getValue());
                    hashSet.remove(d(System.currentTimeMillis()));
                    if (!hashSet.isEmpty()) {
                        arrayList.add(l.a(entry.getKey(), new ArrayList(hashSet)));
                    }
                }
            }
            l(System.currentTimeMillis());
        } catch (Throwable th2) {
            throw th2;
        }
        return arrayList;
    }

    synchronized boolean f(long j10, long j11) {
        return d(j10).equals(d(j11));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void g() {
        String d10 = d(System.currentTimeMillis());
        this.f7657a.edit().putString("last-used-date", d10).commit();
        h(d10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized boolean i(long j10) {
        return j("fire-global", j10);
    }

    synchronized boolean j(String str, long j10) {
        if (this.f7657a.contains(str)) {
            if (!f(this.f7657a.getLong(str, -1L), j10)) {
                this.f7657a.edit().putLong(str, j10).commit();
                return true;
            }
            return false;
        }
        this.f7657a.edit().putLong(str, j10).commit();
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void k(long j10, String str) {
        String d10 = d(j10);
        if (this.f7657a.getString("last-used-date", "").equals(d10)) {
            String e10 = e(d10);
            if (e10 == null) {
                return;
            }
            if (e10.equals(str)) {
                return;
            }
            m(str, d10);
            return;
        }
        long j11 = this.f7657a.getLong("fire-count", 0L);
        if (j11 + 1 == 30) {
            a();
            j11 = this.f7657a.getLong("fire-count", 0L);
        }
        HashSet hashSet = new HashSet(this.f7657a.getStringSet(str, new HashSet()));
        hashSet.add(d10);
        this.f7657a.edit().putStringSet(str, hashSet).putLong("fire-count", j11 + 1).putString("last-used-date", d10).commit();
    }

    synchronized void l(long j10) {
        this.f7657a.edit().putLong("fire-global", j10).commit();
    }
}
