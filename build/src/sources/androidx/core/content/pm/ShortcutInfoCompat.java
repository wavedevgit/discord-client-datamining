package androidx.core.content.pm;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ShortcutInfo;
import android.net.Uri;
import android.os.Build;
import android.os.PersistableBundle;
import android.os.UserHandle;
import android.text.TextUtils;
import androidx.core.app.Person;
import androidx.core.content.c;
import androidx.core.graphics.drawable.IconCompat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ShortcutInfoCompat {
    int A;

    /* renamed from: a  reason: collision with root package name */
    Context f3570a;

    /* renamed from: b  reason: collision with root package name */
    String f3571b;

    /* renamed from: c  reason: collision with root package name */
    String f3572c;

    /* renamed from: d  reason: collision with root package name */
    Intent[] f3573d;

    /* renamed from: e  reason: collision with root package name */
    ComponentName f3574e;

    /* renamed from: f  reason: collision with root package name */
    CharSequence f3575f;

    /* renamed from: g  reason: collision with root package name */
    CharSequence f3576g;

    /* renamed from: h  reason: collision with root package name */
    CharSequence f3577h;

    /* renamed from: i  reason: collision with root package name */
    IconCompat f3578i;

    /* renamed from: j  reason: collision with root package name */
    boolean f3579j;

    /* renamed from: k  reason: collision with root package name */
    Person[] f3580k;

    /* renamed from: l  reason: collision with root package name */
    Set f3581l;

    /* renamed from: m  reason: collision with root package name */
    c f3582m;

    /* renamed from: n  reason: collision with root package name */
    boolean f3583n;

    /* renamed from: o  reason: collision with root package name */
    int f3584o;

    /* renamed from: p  reason: collision with root package name */
    PersistableBundle f3585p;

    /* renamed from: q  reason: collision with root package name */
    long f3586q;

    /* renamed from: r  reason: collision with root package name */
    UserHandle f3587r;

    /* renamed from: s  reason: collision with root package name */
    boolean f3588s;

    /* renamed from: t  reason: collision with root package name */
    boolean f3589t;

    /* renamed from: u  reason: collision with root package name */
    boolean f3590u;

    /* renamed from: v  reason: collision with root package name */
    boolean f3591v;

    /* renamed from: w  reason: collision with root package name */
    boolean f3592w;

    /* renamed from: x  reason: collision with root package name */
    boolean f3593x = true;

    /* renamed from: y  reason: collision with root package name */
    boolean f3594y;

    /* renamed from: z  reason: collision with root package name */
    int f3595z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        static void a(ShortcutInfo.Builder builder, int i10) {
            builder.setExcludedFromSurfaces(i10);
        }
    }

    ShortcutInfoCompat() {
    }

    private PersistableBundle a() {
        if (this.f3585p == null) {
            this.f3585p = new PersistableBundle();
        }
        Person[] personArr = this.f3580k;
        if (personArr != null && personArr.length > 0) {
            this.f3585p.putInt("extraPersonCount", personArr.length);
            int i10 = 0;
            while (i10 < this.f3580k.length) {
                PersistableBundle persistableBundle = this.f3585p;
                StringBuilder sb2 = new StringBuilder();
                sb2.append("extraPerson_");
                int i11 = i10 + 1;
                sb2.append(i11);
                persistableBundle.putPersistableBundle(sb2.toString(), this.f3580k[i10].m());
                i10 = i11;
            }
        }
        c cVar = this.f3582m;
        if (cVar != null) {
            this.f3585p.putString("extraLocusId", cVar.a());
        }
        this.f3585p.putBoolean("extraLongLived", this.f3583n);
        return this.f3585p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List b(Context context, List list) {
        ArrayList arrayList = new ArrayList(list.size());
        for (Object obj : list) {
            arrayList.add(new b(context, p1.c.a(obj)).a());
        }
        return arrayList;
    }

    static c j(ShortcutInfo shortcutInfo) {
        if (Build.VERSION.SDK_INT >= 29) {
            if (shortcutInfo.getLocusId() == null) {
                return null;
            }
            return c.d(shortcutInfo.getLocusId());
        }
        return k(shortcutInfo.getExtras());
    }

    private static c k(PersistableBundle persistableBundle) {
        String string;
        if (persistableBundle == null || (string = persistableBundle.getString("extraLocusId")) == null) {
            return null;
        }
        return new c(string);
    }

    static Person[] m(PersistableBundle persistableBundle) {
        if (persistableBundle != null && persistableBundle.containsKey("extraPersonCount")) {
            int i10 = persistableBundle.getInt("extraPersonCount");
            Person[] personArr = new Person[i10];
            int i11 = 0;
            while (i11 < i10) {
                StringBuilder sb2 = new StringBuilder();
                sb2.append("extraPerson_");
                int i12 = i11 + 1;
                sb2.append(i12);
                personArr[i11] = Person.c(persistableBundle.getPersistableBundle(sb2.toString()));
                i11 = i12;
            }
            return personArr;
        }
        return null;
    }

    public ComponentName c() {
        return this.f3574e;
    }

    public Set d() {
        return this.f3581l;
    }

    public CharSequence e() {
        return this.f3577h;
    }

    public IconCompat f() {
        return this.f3578i;
    }

    public String g() {
        return this.f3571b;
    }

    public Intent h() {
        Intent[] intentArr = this.f3573d;
        return intentArr[intentArr.length - 1];
    }

    public Intent[] i() {
        Intent[] intentArr = this.f3573d;
        return (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
    }

    public CharSequence l() {
        return this.f3576g;
    }

    public int n() {
        return this.f3584o;
    }

    public CharSequence o() {
        return this.f3575f;
    }

    public boolean p(int i10) {
        if ((i10 & this.A) != 0) {
            return true;
        }
        return false;
    }

    public ShortcutInfo q() {
        p1.b.a();
        ShortcutInfo.Builder intents = p1.a.a(this.f3570a, this.f3571b).setShortLabel(this.f3575f).setIntents(this.f3573d);
        IconCompat iconCompat = this.f3578i;
        if (iconCompat != null) {
            intents.setIcon(iconCompat.w(this.f3570a));
        }
        if (!TextUtils.isEmpty(this.f3576g)) {
            intents.setLongLabel(this.f3576g);
        }
        if (!TextUtils.isEmpty(this.f3577h)) {
            intents.setDisabledMessage(this.f3577h);
        }
        ComponentName componentName = this.f3574e;
        if (componentName != null) {
            intents.setActivity(componentName);
        }
        Set<String> set = this.f3581l;
        if (set != null) {
            intents.setCategories(set);
        }
        intents.setRank(this.f3584o);
        PersistableBundle persistableBundle = this.f3585p;
        if (persistableBundle != null) {
            intents.setExtras(persistableBundle);
        }
        if (Build.VERSION.SDK_INT >= 29) {
            Person[] personArr = this.f3580k;
            if (personArr != null && personArr.length > 0) {
                int length = personArr.length;
                android.app.Person[] personArr2 = new android.app.Person[length];
                for (int i10 = 0; i10 < length; i10++) {
                    personArr2[i10] = this.f3580k[i10].k();
                }
                intents.setPersons(personArr2);
            }
            c cVar = this.f3582m;
            if (cVar != null) {
                intents.setLocusId(cVar.c());
            }
            intents.setLongLived(this.f3583n);
        } else {
            intents.setExtras(a());
        }
        if (Build.VERSION.SDK_INT >= 33) {
            a.a(intents, this.A);
        }
        return intents.build();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final ShortcutInfoCompat f3596a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f3597b;

        /* renamed from: c  reason: collision with root package name */
        private Set f3598c;

        /* renamed from: d  reason: collision with root package name */
        private Map f3599d;

        /* renamed from: e  reason: collision with root package name */
        private Uri f3600e;

        public b(Context context, String str) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3596a = shortcutInfoCompat;
            shortcutInfoCompat.f3570a = context;
            shortcutInfoCompat.f3571b = str;
        }

        public ShortcutInfoCompat a() {
            String[] strArr;
            if (!TextUtils.isEmpty(this.f3596a.f3575f)) {
                ShortcutInfoCompat shortcutInfoCompat = this.f3596a;
                Intent[] intentArr = shortcutInfoCompat.f3573d;
                if (intentArr != null && intentArr.length != 0) {
                    if (this.f3597b) {
                        if (shortcutInfoCompat.f3582m == null) {
                            shortcutInfoCompat.f3582m = new c(shortcutInfoCompat.f3571b);
                        }
                        this.f3596a.f3583n = true;
                    }
                    if (this.f3598c != null) {
                        ShortcutInfoCompat shortcutInfoCompat2 = this.f3596a;
                        if (shortcutInfoCompat2.f3581l == null) {
                            shortcutInfoCompat2.f3581l = new HashSet();
                        }
                        this.f3596a.f3581l.addAll(this.f3598c);
                    }
                    if (this.f3599d != null) {
                        ShortcutInfoCompat shortcutInfoCompat3 = this.f3596a;
                        if (shortcutInfoCompat3.f3585p == null) {
                            shortcutInfoCompat3.f3585p = new PersistableBundle();
                        }
                        for (String str : this.f3599d.keySet()) {
                            Map map = (Map) this.f3599d.get(str);
                            this.f3596a.f3585p.putStringArray(str, (String[]) map.keySet().toArray(new String[0]));
                            for (String str2 : map.keySet()) {
                                List list = (List) map.get(str2);
                                PersistableBundle persistableBundle = this.f3596a.f3585p;
                                String str3 = str + "/" + str2;
                                if (list == null) {
                                    strArr = new String[0];
                                } else {
                                    strArr = (String[]) list.toArray(new String[0]);
                                }
                                persistableBundle.putStringArray(str3, strArr);
                            }
                        }
                    }
                    if (this.f3600e != null) {
                        ShortcutInfoCompat shortcutInfoCompat4 = this.f3596a;
                        if (shortcutInfoCompat4.f3585p == null) {
                            shortcutInfoCompat4.f3585p = new PersistableBundle();
                        }
                        this.f3596a.f3585p.putString("extraSliceUri", v1.b.a(this.f3600e));
                    }
                    return this.f3596a;
                }
                throw new IllegalArgumentException("Shortcut must have an intent");
            }
            throw new IllegalArgumentException("Shortcut must have a non-empty label");
        }

        public b b(ComponentName componentName) {
            this.f3596a.f3574e = componentName;
            return this;
        }

        public b c(Set set) {
            u0.b bVar = new u0.b();
            bVar.addAll(set);
            this.f3596a.f3581l = bVar;
            return this;
        }

        public b d(CharSequence charSequence) {
            this.f3596a.f3577h = charSequence;
            return this;
        }

        public b e(IconCompat iconCompat) {
            this.f3596a.f3578i = iconCompat;
            return this;
        }

        public b f(Intent intent) {
            return g(new Intent[]{intent});
        }

        public b g(Intent[] intentArr) {
            this.f3596a.f3573d = intentArr;
            return this;
        }

        public b h(c cVar) {
            this.f3596a.f3582m = cVar;
            return this;
        }

        public b i(CharSequence charSequence) {
            this.f3596a.f3576g = charSequence;
            return this;
        }

        public b j(boolean z10) {
            this.f3596a.f3583n = z10;
            return this;
        }

        public b k(Person[] personArr) {
            this.f3596a.f3580k = personArr;
            return this;
        }

        public b l(int i10) {
            this.f3596a.f3584o = i10;
            return this;
        }

        public b m(CharSequence charSequence) {
            this.f3596a.f3575f = charSequence;
            return this;
        }

        public b(ShortcutInfoCompat shortcutInfoCompat) {
            ShortcutInfoCompat shortcutInfoCompat2 = new ShortcutInfoCompat();
            this.f3596a = shortcutInfoCompat2;
            shortcutInfoCompat2.f3570a = shortcutInfoCompat.f3570a;
            shortcutInfoCompat2.f3571b = shortcutInfoCompat.f3571b;
            shortcutInfoCompat2.f3572c = shortcutInfoCompat.f3572c;
            Intent[] intentArr = shortcutInfoCompat.f3573d;
            shortcutInfoCompat2.f3573d = (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
            shortcutInfoCompat2.f3574e = shortcutInfoCompat.f3574e;
            shortcutInfoCompat2.f3575f = shortcutInfoCompat.f3575f;
            shortcutInfoCompat2.f3576g = shortcutInfoCompat.f3576g;
            shortcutInfoCompat2.f3577h = shortcutInfoCompat.f3577h;
            shortcutInfoCompat2.f3595z = shortcutInfoCompat.f3595z;
            shortcutInfoCompat2.f3578i = shortcutInfoCompat.f3578i;
            shortcutInfoCompat2.f3579j = shortcutInfoCompat.f3579j;
            shortcutInfoCompat2.f3587r = shortcutInfoCompat.f3587r;
            shortcutInfoCompat2.f3586q = shortcutInfoCompat.f3586q;
            shortcutInfoCompat2.f3588s = shortcutInfoCompat.f3588s;
            shortcutInfoCompat2.f3589t = shortcutInfoCompat.f3589t;
            shortcutInfoCompat2.f3590u = shortcutInfoCompat.f3590u;
            shortcutInfoCompat2.f3591v = shortcutInfoCompat.f3591v;
            shortcutInfoCompat2.f3592w = shortcutInfoCompat.f3592w;
            shortcutInfoCompat2.f3593x = shortcutInfoCompat.f3593x;
            shortcutInfoCompat2.f3582m = shortcutInfoCompat.f3582m;
            shortcutInfoCompat2.f3583n = shortcutInfoCompat.f3583n;
            shortcutInfoCompat2.f3594y = shortcutInfoCompat.f3594y;
            shortcutInfoCompat2.f3584o = shortcutInfoCompat.f3584o;
            Person[] personArr = shortcutInfoCompat.f3580k;
            if (personArr != null) {
                shortcutInfoCompat2.f3580k = (Person[]) Arrays.copyOf(personArr, personArr.length);
            }
            if (shortcutInfoCompat.f3581l != null) {
                shortcutInfoCompat2.f3581l = new HashSet(shortcutInfoCompat.f3581l);
            }
            PersistableBundle persistableBundle = shortcutInfoCompat.f3585p;
            if (persistableBundle != null) {
                shortcutInfoCompat2.f3585p = persistableBundle;
            }
            shortcutInfoCompat2.A = shortcutInfoCompat.A;
        }

        public b(Context context, ShortcutInfo shortcutInfo) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3596a = shortcutInfoCompat;
            shortcutInfoCompat.f3570a = context;
            shortcutInfoCompat.f3571b = shortcutInfo.getId();
            shortcutInfoCompat.f3572c = shortcutInfo.getPackage();
            Intent[] intents = shortcutInfo.getIntents();
            shortcutInfoCompat.f3573d = (Intent[]) Arrays.copyOf(intents, intents.length);
            shortcutInfoCompat.f3574e = shortcutInfo.getActivity();
            shortcutInfoCompat.f3575f = shortcutInfo.getShortLabel();
            shortcutInfoCompat.f3576g = shortcutInfo.getLongLabel();
            shortcutInfoCompat.f3577h = shortcutInfo.getDisabledMessage();
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 28) {
                shortcutInfoCompat.f3595z = shortcutInfo.getDisabledReason();
            } else {
                shortcutInfoCompat.f3595z = shortcutInfo.isEnabled() ? 0 : 3;
            }
            shortcutInfoCompat.f3581l = shortcutInfo.getCategories();
            shortcutInfoCompat.f3580k = ShortcutInfoCompat.m(shortcutInfo.getExtras());
            shortcutInfoCompat.f3587r = shortcutInfo.getUserHandle();
            shortcutInfoCompat.f3586q = shortcutInfo.getLastChangedTimestamp();
            if (i10 >= 30) {
                shortcutInfoCompat.f3588s = shortcutInfo.isCached();
            }
            shortcutInfoCompat.f3589t = shortcutInfo.isDynamic();
            shortcutInfoCompat.f3590u = shortcutInfo.isPinned();
            shortcutInfoCompat.f3591v = shortcutInfo.isDeclaredInManifest();
            shortcutInfoCompat.f3592w = shortcutInfo.isImmutable();
            shortcutInfoCompat.f3593x = shortcutInfo.isEnabled();
            shortcutInfoCompat.f3594y = shortcutInfo.hasKeyFieldsOnly();
            shortcutInfoCompat.f3582m = ShortcutInfoCompat.j(shortcutInfo);
            shortcutInfoCompat.f3584o = shortcutInfo.getRank();
            shortcutInfoCompat.f3585p = shortcutInfo.getExtras();
        }
    }
}
