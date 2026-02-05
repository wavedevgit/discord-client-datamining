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
    Context f3241a;

    /* renamed from: b  reason: collision with root package name */
    String f3242b;

    /* renamed from: c  reason: collision with root package name */
    String f3243c;

    /* renamed from: d  reason: collision with root package name */
    Intent[] f3244d;

    /* renamed from: e  reason: collision with root package name */
    ComponentName f3245e;

    /* renamed from: f  reason: collision with root package name */
    CharSequence f3246f;

    /* renamed from: g  reason: collision with root package name */
    CharSequence f3247g;

    /* renamed from: h  reason: collision with root package name */
    CharSequence f3248h;

    /* renamed from: i  reason: collision with root package name */
    IconCompat f3249i;

    /* renamed from: j  reason: collision with root package name */
    boolean f3250j;

    /* renamed from: k  reason: collision with root package name */
    Person[] f3251k;

    /* renamed from: l  reason: collision with root package name */
    Set f3252l;

    /* renamed from: m  reason: collision with root package name */
    c f3253m;

    /* renamed from: n  reason: collision with root package name */
    boolean f3254n;

    /* renamed from: o  reason: collision with root package name */
    int f3255o;

    /* renamed from: p  reason: collision with root package name */
    PersistableBundle f3256p;

    /* renamed from: q  reason: collision with root package name */
    long f3257q;

    /* renamed from: r  reason: collision with root package name */
    UserHandle f3258r;

    /* renamed from: s  reason: collision with root package name */
    boolean f3259s;

    /* renamed from: t  reason: collision with root package name */
    boolean f3260t;

    /* renamed from: u  reason: collision with root package name */
    boolean f3261u;

    /* renamed from: v  reason: collision with root package name */
    boolean f3262v;

    /* renamed from: w  reason: collision with root package name */
    boolean f3263w;

    /* renamed from: x  reason: collision with root package name */
    boolean f3264x = true;

    /* renamed from: y  reason: collision with root package name */
    boolean f3265y;

    /* renamed from: z  reason: collision with root package name */
    int f3266z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        static void a(ShortcutInfo.Builder builder, int i10) {
            builder.setExcludedFromSurfaces(i10);
        }
    }

    ShortcutInfoCompat() {
    }

    private PersistableBundle a() {
        if (this.f3256p == null) {
            this.f3256p = new PersistableBundle();
        }
        Person[] personArr = this.f3251k;
        if (personArr != null && personArr.length > 0) {
            this.f3256p.putInt("extraPersonCount", personArr.length);
            int i10 = 0;
            while (i10 < this.f3251k.length) {
                PersistableBundle persistableBundle = this.f3256p;
                StringBuilder sb2 = new StringBuilder();
                sb2.append("extraPerson_");
                int i11 = i10 + 1;
                sb2.append(i11);
                persistableBundle.putPersistableBundle(sb2.toString(), this.f3251k[i10].m());
                i10 = i11;
            }
        }
        c cVar = this.f3253m;
        if (cVar != null) {
            this.f3256p.putString("extraLocusId", cVar.a());
        }
        this.f3256p.putBoolean("extraLongLived", this.f3254n);
        return this.f3256p;
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
        return this.f3245e;
    }

    public Set d() {
        return this.f3252l;
    }

    public CharSequence e() {
        return this.f3248h;
    }

    public IconCompat f() {
        return this.f3249i;
    }

    public String g() {
        return this.f3242b;
    }

    public Intent h() {
        Intent[] intentArr = this.f3244d;
        return intentArr[intentArr.length - 1];
    }

    public Intent[] i() {
        Intent[] intentArr = this.f3244d;
        return (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
    }

    public CharSequence l() {
        return this.f3247g;
    }

    public int n() {
        return this.f3255o;
    }

    public CharSequence o() {
        return this.f3246f;
    }

    public boolean p(int i10) {
        if ((i10 & this.A) != 0) {
            return true;
        }
        return false;
    }

    public ShortcutInfo q() {
        p1.b.a();
        ShortcutInfo.Builder intents = p1.a.a(this.f3241a, this.f3242b).setShortLabel(this.f3246f).setIntents(this.f3244d);
        IconCompat iconCompat = this.f3249i;
        if (iconCompat != null) {
            intents.setIcon(iconCompat.w(this.f3241a));
        }
        if (!TextUtils.isEmpty(this.f3247g)) {
            intents.setLongLabel(this.f3247g);
        }
        if (!TextUtils.isEmpty(this.f3248h)) {
            intents.setDisabledMessage(this.f3248h);
        }
        ComponentName componentName = this.f3245e;
        if (componentName != null) {
            intents.setActivity(componentName);
        }
        Set<String> set = this.f3252l;
        if (set != null) {
            intents.setCategories(set);
        }
        intents.setRank(this.f3255o);
        PersistableBundle persistableBundle = this.f3256p;
        if (persistableBundle != null) {
            intents.setExtras(persistableBundle);
        }
        if (Build.VERSION.SDK_INT >= 29) {
            Person[] personArr = this.f3251k;
            if (personArr != null && personArr.length > 0) {
                int length = personArr.length;
                android.app.Person[] personArr2 = new android.app.Person[length];
                for (int i10 = 0; i10 < length; i10++) {
                    personArr2[i10] = this.f3251k[i10].k();
                }
                intents.setPersons(personArr2);
            }
            c cVar = this.f3253m;
            if (cVar != null) {
                intents.setLocusId(cVar.c());
            }
            intents.setLongLived(this.f3254n);
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
        private final ShortcutInfoCompat f3267a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f3268b;

        /* renamed from: c  reason: collision with root package name */
        private Set f3269c;

        /* renamed from: d  reason: collision with root package name */
        private Map f3270d;

        /* renamed from: e  reason: collision with root package name */
        private Uri f3271e;

        public b(Context context, String str) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3267a = shortcutInfoCompat;
            shortcutInfoCompat.f3241a = context;
            shortcutInfoCompat.f3242b = str;
        }

        public ShortcutInfoCompat a() {
            String[] strArr;
            if (!TextUtils.isEmpty(this.f3267a.f3246f)) {
                ShortcutInfoCompat shortcutInfoCompat = this.f3267a;
                Intent[] intentArr = shortcutInfoCompat.f3244d;
                if (intentArr != null && intentArr.length != 0) {
                    if (this.f3268b) {
                        if (shortcutInfoCompat.f3253m == null) {
                            shortcutInfoCompat.f3253m = new c(shortcutInfoCompat.f3242b);
                        }
                        this.f3267a.f3254n = true;
                    }
                    if (this.f3269c != null) {
                        ShortcutInfoCompat shortcutInfoCompat2 = this.f3267a;
                        if (shortcutInfoCompat2.f3252l == null) {
                            shortcutInfoCompat2.f3252l = new HashSet();
                        }
                        this.f3267a.f3252l.addAll(this.f3269c);
                    }
                    if (this.f3270d != null) {
                        ShortcutInfoCompat shortcutInfoCompat3 = this.f3267a;
                        if (shortcutInfoCompat3.f3256p == null) {
                            shortcutInfoCompat3.f3256p = new PersistableBundle();
                        }
                        for (String str : this.f3270d.keySet()) {
                            Map map = (Map) this.f3270d.get(str);
                            this.f3267a.f3256p.putStringArray(str, (String[]) map.keySet().toArray(new String[0]));
                            for (String str2 : map.keySet()) {
                                List list = (List) map.get(str2);
                                PersistableBundle persistableBundle = this.f3267a.f3256p;
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
                    if (this.f3271e != null) {
                        ShortcutInfoCompat shortcutInfoCompat4 = this.f3267a;
                        if (shortcutInfoCompat4.f3256p == null) {
                            shortcutInfoCompat4.f3256p = new PersistableBundle();
                        }
                        this.f3267a.f3256p.putString("extraSliceUri", v1.b.a(this.f3271e));
                    }
                    return this.f3267a;
                }
                throw new IllegalArgumentException("Shortcut must have an intent");
            }
            throw new IllegalArgumentException("Shortcut must have a non-empty label");
        }

        public b b(ComponentName componentName) {
            this.f3267a.f3245e = componentName;
            return this;
        }

        public b c(Set set) {
            u0.b bVar = new u0.b();
            bVar.addAll(set);
            this.f3267a.f3252l = bVar;
            return this;
        }

        public b d(CharSequence charSequence) {
            this.f3267a.f3248h = charSequence;
            return this;
        }

        public b e(IconCompat iconCompat) {
            this.f3267a.f3249i = iconCompat;
            return this;
        }

        public b f(Intent intent) {
            return g(new Intent[]{intent});
        }

        public b g(Intent[] intentArr) {
            this.f3267a.f3244d = intentArr;
            return this;
        }

        public b h(c cVar) {
            this.f3267a.f3253m = cVar;
            return this;
        }

        public b i(CharSequence charSequence) {
            this.f3267a.f3247g = charSequence;
            return this;
        }

        public b j(boolean z10) {
            this.f3267a.f3254n = z10;
            return this;
        }

        public b k(Person[] personArr) {
            this.f3267a.f3251k = personArr;
            return this;
        }

        public b l(int i10) {
            this.f3267a.f3255o = i10;
            return this;
        }

        public b m(CharSequence charSequence) {
            this.f3267a.f3246f = charSequence;
            return this;
        }

        public b(ShortcutInfoCompat shortcutInfoCompat) {
            ShortcutInfoCompat shortcutInfoCompat2 = new ShortcutInfoCompat();
            this.f3267a = shortcutInfoCompat2;
            shortcutInfoCompat2.f3241a = shortcutInfoCompat.f3241a;
            shortcutInfoCompat2.f3242b = shortcutInfoCompat.f3242b;
            shortcutInfoCompat2.f3243c = shortcutInfoCompat.f3243c;
            Intent[] intentArr = shortcutInfoCompat.f3244d;
            shortcutInfoCompat2.f3244d = (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
            shortcutInfoCompat2.f3245e = shortcutInfoCompat.f3245e;
            shortcutInfoCompat2.f3246f = shortcutInfoCompat.f3246f;
            shortcutInfoCompat2.f3247g = shortcutInfoCompat.f3247g;
            shortcutInfoCompat2.f3248h = shortcutInfoCompat.f3248h;
            shortcutInfoCompat2.f3266z = shortcutInfoCompat.f3266z;
            shortcutInfoCompat2.f3249i = shortcutInfoCompat.f3249i;
            shortcutInfoCompat2.f3250j = shortcutInfoCompat.f3250j;
            shortcutInfoCompat2.f3258r = shortcutInfoCompat.f3258r;
            shortcutInfoCompat2.f3257q = shortcutInfoCompat.f3257q;
            shortcutInfoCompat2.f3259s = shortcutInfoCompat.f3259s;
            shortcutInfoCompat2.f3260t = shortcutInfoCompat.f3260t;
            shortcutInfoCompat2.f3261u = shortcutInfoCompat.f3261u;
            shortcutInfoCompat2.f3262v = shortcutInfoCompat.f3262v;
            shortcutInfoCompat2.f3263w = shortcutInfoCompat.f3263w;
            shortcutInfoCompat2.f3264x = shortcutInfoCompat.f3264x;
            shortcutInfoCompat2.f3253m = shortcutInfoCompat.f3253m;
            shortcutInfoCompat2.f3254n = shortcutInfoCompat.f3254n;
            shortcutInfoCompat2.f3265y = shortcutInfoCompat.f3265y;
            shortcutInfoCompat2.f3255o = shortcutInfoCompat.f3255o;
            Person[] personArr = shortcutInfoCompat.f3251k;
            if (personArr != null) {
                shortcutInfoCompat2.f3251k = (Person[]) Arrays.copyOf(personArr, personArr.length);
            }
            if (shortcutInfoCompat.f3252l != null) {
                shortcutInfoCompat2.f3252l = new HashSet(shortcutInfoCompat.f3252l);
            }
            PersistableBundle persistableBundle = shortcutInfoCompat.f3256p;
            if (persistableBundle != null) {
                shortcutInfoCompat2.f3256p = persistableBundle;
            }
            shortcutInfoCompat2.A = shortcutInfoCompat.A;
        }

        public b(Context context, ShortcutInfo shortcutInfo) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3267a = shortcutInfoCompat;
            shortcutInfoCompat.f3241a = context;
            shortcutInfoCompat.f3242b = shortcutInfo.getId();
            shortcutInfoCompat.f3243c = shortcutInfo.getPackage();
            Intent[] intents = shortcutInfo.getIntents();
            shortcutInfoCompat.f3244d = (Intent[]) Arrays.copyOf(intents, intents.length);
            shortcutInfoCompat.f3245e = shortcutInfo.getActivity();
            shortcutInfoCompat.f3246f = shortcutInfo.getShortLabel();
            shortcutInfoCompat.f3247g = shortcutInfo.getLongLabel();
            shortcutInfoCompat.f3248h = shortcutInfo.getDisabledMessage();
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 28) {
                shortcutInfoCompat.f3266z = shortcutInfo.getDisabledReason();
            } else {
                shortcutInfoCompat.f3266z = shortcutInfo.isEnabled() ? 0 : 3;
            }
            shortcutInfoCompat.f3252l = shortcutInfo.getCategories();
            shortcutInfoCompat.f3251k = ShortcutInfoCompat.m(shortcutInfo.getExtras());
            shortcutInfoCompat.f3258r = shortcutInfo.getUserHandle();
            shortcutInfoCompat.f3257q = shortcutInfo.getLastChangedTimestamp();
            if (i10 >= 30) {
                shortcutInfoCompat.f3259s = shortcutInfo.isCached();
            }
            shortcutInfoCompat.f3260t = shortcutInfo.isDynamic();
            shortcutInfoCompat.f3261u = shortcutInfo.isPinned();
            shortcutInfoCompat.f3262v = shortcutInfo.isDeclaredInManifest();
            shortcutInfoCompat.f3263w = shortcutInfo.isImmutable();
            shortcutInfoCompat.f3264x = shortcutInfo.isEnabled();
            shortcutInfoCompat.f3265y = shortcutInfo.hasKeyFieldsOnly();
            shortcutInfoCompat.f3253m = ShortcutInfoCompat.j(shortcutInfo);
            shortcutInfoCompat.f3255o = shortcutInfo.getRank();
            shortcutInfoCompat.f3256p = shortcutInfo.getExtras();
        }
    }
}
