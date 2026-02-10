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
    Context f3270a;

    /* renamed from: b  reason: collision with root package name */
    String f3271b;

    /* renamed from: c  reason: collision with root package name */
    String f3272c;

    /* renamed from: d  reason: collision with root package name */
    Intent[] f3273d;

    /* renamed from: e  reason: collision with root package name */
    ComponentName f3274e;

    /* renamed from: f  reason: collision with root package name */
    CharSequence f3275f;

    /* renamed from: g  reason: collision with root package name */
    CharSequence f3276g;

    /* renamed from: h  reason: collision with root package name */
    CharSequence f3277h;

    /* renamed from: i  reason: collision with root package name */
    IconCompat f3278i;

    /* renamed from: j  reason: collision with root package name */
    boolean f3279j;

    /* renamed from: k  reason: collision with root package name */
    Person[] f3280k;

    /* renamed from: l  reason: collision with root package name */
    Set f3281l;

    /* renamed from: m  reason: collision with root package name */
    c f3282m;

    /* renamed from: n  reason: collision with root package name */
    boolean f3283n;

    /* renamed from: o  reason: collision with root package name */
    int f3284o;

    /* renamed from: p  reason: collision with root package name */
    PersistableBundle f3285p;

    /* renamed from: q  reason: collision with root package name */
    long f3286q;

    /* renamed from: r  reason: collision with root package name */
    UserHandle f3287r;

    /* renamed from: s  reason: collision with root package name */
    boolean f3288s;

    /* renamed from: t  reason: collision with root package name */
    boolean f3289t;

    /* renamed from: u  reason: collision with root package name */
    boolean f3290u;

    /* renamed from: v  reason: collision with root package name */
    boolean f3291v;

    /* renamed from: w  reason: collision with root package name */
    boolean f3292w;

    /* renamed from: x  reason: collision with root package name */
    boolean f3293x = true;

    /* renamed from: y  reason: collision with root package name */
    boolean f3294y;

    /* renamed from: z  reason: collision with root package name */
    int f3295z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        static void a(ShortcutInfo.Builder builder, int i10) {
            builder.setExcludedFromSurfaces(i10);
        }
    }

    ShortcutInfoCompat() {
    }

    private PersistableBundle a() {
        if (this.f3285p == null) {
            this.f3285p = new PersistableBundle();
        }
        Person[] personArr = this.f3280k;
        if (personArr != null && personArr.length > 0) {
            this.f3285p.putInt("extraPersonCount", personArr.length);
            int i10 = 0;
            while (i10 < this.f3280k.length) {
                PersistableBundle persistableBundle = this.f3285p;
                StringBuilder sb2 = new StringBuilder();
                sb2.append("extraPerson_");
                int i11 = i10 + 1;
                sb2.append(i11);
                persistableBundle.putPersistableBundle(sb2.toString(), this.f3280k[i10].m());
                i10 = i11;
            }
        }
        c cVar = this.f3282m;
        if (cVar != null) {
            this.f3285p.putString("extraLocusId", cVar.a());
        }
        this.f3285p.putBoolean("extraLongLived", this.f3283n);
        return this.f3285p;
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
        return this.f3274e;
    }

    public Set d() {
        return this.f3281l;
    }

    public CharSequence e() {
        return this.f3277h;
    }

    public IconCompat f() {
        return this.f3278i;
    }

    public String g() {
        return this.f3271b;
    }

    public Intent h() {
        Intent[] intentArr = this.f3273d;
        return intentArr[intentArr.length - 1];
    }

    public Intent[] i() {
        Intent[] intentArr = this.f3273d;
        return (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
    }

    public CharSequence l() {
        return this.f3276g;
    }

    public int n() {
        return this.f3284o;
    }

    public CharSequence o() {
        return this.f3275f;
    }

    public boolean p(int i10) {
        if ((i10 & this.A) != 0) {
            return true;
        }
        return false;
    }

    public ShortcutInfo q() {
        p1.b.a();
        ShortcutInfo.Builder intents = p1.a.a(this.f3270a, this.f3271b).setShortLabel(this.f3275f).setIntents(this.f3273d);
        IconCompat iconCompat = this.f3278i;
        if (iconCompat != null) {
            intents.setIcon(iconCompat.w(this.f3270a));
        }
        if (!TextUtils.isEmpty(this.f3276g)) {
            intents.setLongLabel(this.f3276g);
        }
        if (!TextUtils.isEmpty(this.f3277h)) {
            intents.setDisabledMessage(this.f3277h);
        }
        ComponentName componentName = this.f3274e;
        if (componentName != null) {
            intents.setActivity(componentName);
        }
        Set<String> set = this.f3281l;
        if (set != null) {
            intents.setCategories(set);
        }
        intents.setRank(this.f3284o);
        PersistableBundle persistableBundle = this.f3285p;
        if (persistableBundle != null) {
            intents.setExtras(persistableBundle);
        }
        if (Build.VERSION.SDK_INT >= 29) {
            Person[] personArr = this.f3280k;
            if (personArr != null && personArr.length > 0) {
                int length = personArr.length;
                android.app.Person[] personArr2 = new android.app.Person[length];
                for (int i10 = 0; i10 < length; i10++) {
                    personArr2[i10] = this.f3280k[i10].k();
                }
                intents.setPersons(personArr2);
            }
            c cVar = this.f3282m;
            if (cVar != null) {
                intents.setLocusId(cVar.c());
            }
            intents.setLongLived(this.f3283n);
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
        private final ShortcutInfoCompat f3296a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f3297b;

        /* renamed from: c  reason: collision with root package name */
        private Set f3298c;

        /* renamed from: d  reason: collision with root package name */
        private Map f3299d;

        /* renamed from: e  reason: collision with root package name */
        private Uri f3300e;

        public b(Context context, String str) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3296a = shortcutInfoCompat;
            shortcutInfoCompat.f3270a = context;
            shortcutInfoCompat.f3271b = str;
        }

        public ShortcutInfoCompat a() {
            String[] strArr;
            if (!TextUtils.isEmpty(this.f3296a.f3275f)) {
                ShortcutInfoCompat shortcutInfoCompat = this.f3296a;
                Intent[] intentArr = shortcutInfoCompat.f3273d;
                if (intentArr != null && intentArr.length != 0) {
                    if (this.f3297b) {
                        if (shortcutInfoCompat.f3282m == null) {
                            shortcutInfoCompat.f3282m = new c(shortcutInfoCompat.f3271b);
                        }
                        this.f3296a.f3283n = true;
                    }
                    if (this.f3298c != null) {
                        ShortcutInfoCompat shortcutInfoCompat2 = this.f3296a;
                        if (shortcutInfoCompat2.f3281l == null) {
                            shortcutInfoCompat2.f3281l = new HashSet();
                        }
                        this.f3296a.f3281l.addAll(this.f3298c);
                    }
                    if (this.f3299d != null) {
                        ShortcutInfoCompat shortcutInfoCompat3 = this.f3296a;
                        if (shortcutInfoCompat3.f3285p == null) {
                            shortcutInfoCompat3.f3285p = new PersistableBundle();
                        }
                        for (String str : this.f3299d.keySet()) {
                            Map map = (Map) this.f3299d.get(str);
                            this.f3296a.f3285p.putStringArray(str, (String[]) map.keySet().toArray(new String[0]));
                            for (String str2 : map.keySet()) {
                                List list = (List) map.get(str2);
                                PersistableBundle persistableBundle = this.f3296a.f3285p;
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
                    if (this.f3300e != null) {
                        ShortcutInfoCompat shortcutInfoCompat4 = this.f3296a;
                        if (shortcutInfoCompat4.f3285p == null) {
                            shortcutInfoCompat4.f3285p = new PersistableBundle();
                        }
                        this.f3296a.f3285p.putString("extraSliceUri", v1.b.a(this.f3300e));
                    }
                    return this.f3296a;
                }
                throw new IllegalArgumentException("Shortcut must have an intent");
            }
            throw new IllegalArgumentException("Shortcut must have a non-empty label");
        }

        public b b(ComponentName componentName) {
            this.f3296a.f3274e = componentName;
            return this;
        }

        public b c(Set set) {
            u0.b bVar = new u0.b();
            bVar.addAll(set);
            this.f3296a.f3281l = bVar;
            return this;
        }

        public b d(CharSequence charSequence) {
            this.f3296a.f3277h = charSequence;
            return this;
        }

        public b e(IconCompat iconCompat) {
            this.f3296a.f3278i = iconCompat;
            return this;
        }

        public b f(Intent intent) {
            return g(new Intent[]{intent});
        }

        public b g(Intent[] intentArr) {
            this.f3296a.f3273d = intentArr;
            return this;
        }

        public b h(c cVar) {
            this.f3296a.f3282m = cVar;
            return this;
        }

        public b i(CharSequence charSequence) {
            this.f3296a.f3276g = charSequence;
            return this;
        }

        public b j(boolean z10) {
            this.f3296a.f3283n = z10;
            return this;
        }

        public b k(Person[] personArr) {
            this.f3296a.f3280k = personArr;
            return this;
        }

        public b l(int i10) {
            this.f3296a.f3284o = i10;
            return this;
        }

        public b m(CharSequence charSequence) {
            this.f3296a.f3275f = charSequence;
            return this;
        }

        public b(ShortcutInfoCompat shortcutInfoCompat) {
            ShortcutInfoCompat shortcutInfoCompat2 = new ShortcutInfoCompat();
            this.f3296a = shortcutInfoCompat2;
            shortcutInfoCompat2.f3270a = shortcutInfoCompat.f3270a;
            shortcutInfoCompat2.f3271b = shortcutInfoCompat.f3271b;
            shortcutInfoCompat2.f3272c = shortcutInfoCompat.f3272c;
            Intent[] intentArr = shortcutInfoCompat.f3273d;
            shortcutInfoCompat2.f3273d = (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
            shortcutInfoCompat2.f3274e = shortcutInfoCompat.f3274e;
            shortcutInfoCompat2.f3275f = shortcutInfoCompat.f3275f;
            shortcutInfoCompat2.f3276g = shortcutInfoCompat.f3276g;
            shortcutInfoCompat2.f3277h = shortcutInfoCompat.f3277h;
            shortcutInfoCompat2.f3295z = shortcutInfoCompat.f3295z;
            shortcutInfoCompat2.f3278i = shortcutInfoCompat.f3278i;
            shortcutInfoCompat2.f3279j = shortcutInfoCompat.f3279j;
            shortcutInfoCompat2.f3287r = shortcutInfoCompat.f3287r;
            shortcutInfoCompat2.f3286q = shortcutInfoCompat.f3286q;
            shortcutInfoCompat2.f3288s = shortcutInfoCompat.f3288s;
            shortcutInfoCompat2.f3289t = shortcutInfoCompat.f3289t;
            shortcutInfoCompat2.f3290u = shortcutInfoCompat.f3290u;
            shortcutInfoCompat2.f3291v = shortcutInfoCompat.f3291v;
            shortcutInfoCompat2.f3292w = shortcutInfoCompat.f3292w;
            shortcutInfoCompat2.f3293x = shortcutInfoCompat.f3293x;
            shortcutInfoCompat2.f3282m = shortcutInfoCompat.f3282m;
            shortcutInfoCompat2.f3283n = shortcutInfoCompat.f3283n;
            shortcutInfoCompat2.f3294y = shortcutInfoCompat.f3294y;
            shortcutInfoCompat2.f3284o = shortcutInfoCompat.f3284o;
            Person[] personArr = shortcutInfoCompat.f3280k;
            if (personArr != null) {
                shortcutInfoCompat2.f3280k = (Person[]) Arrays.copyOf(personArr, personArr.length);
            }
            if (shortcutInfoCompat.f3281l != null) {
                shortcutInfoCompat2.f3281l = new HashSet(shortcutInfoCompat.f3281l);
            }
            PersistableBundle persistableBundle = shortcutInfoCompat.f3285p;
            if (persistableBundle != null) {
                shortcutInfoCompat2.f3285p = persistableBundle;
            }
            shortcutInfoCompat2.A = shortcutInfoCompat.A;
        }

        public b(Context context, ShortcutInfo shortcutInfo) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3296a = shortcutInfoCompat;
            shortcutInfoCompat.f3270a = context;
            shortcutInfoCompat.f3271b = shortcutInfo.getId();
            shortcutInfoCompat.f3272c = shortcutInfo.getPackage();
            Intent[] intents = shortcutInfo.getIntents();
            shortcutInfoCompat.f3273d = (Intent[]) Arrays.copyOf(intents, intents.length);
            shortcutInfoCompat.f3274e = shortcutInfo.getActivity();
            shortcutInfoCompat.f3275f = shortcutInfo.getShortLabel();
            shortcutInfoCompat.f3276g = shortcutInfo.getLongLabel();
            shortcutInfoCompat.f3277h = shortcutInfo.getDisabledMessage();
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 28) {
                shortcutInfoCompat.f3295z = shortcutInfo.getDisabledReason();
            } else {
                shortcutInfoCompat.f3295z = shortcutInfo.isEnabled() ? 0 : 3;
            }
            shortcutInfoCompat.f3281l = shortcutInfo.getCategories();
            shortcutInfoCompat.f3280k = ShortcutInfoCompat.m(shortcutInfo.getExtras());
            shortcutInfoCompat.f3287r = shortcutInfo.getUserHandle();
            shortcutInfoCompat.f3286q = shortcutInfo.getLastChangedTimestamp();
            if (i10 >= 30) {
                shortcutInfoCompat.f3288s = shortcutInfo.isCached();
            }
            shortcutInfoCompat.f3289t = shortcutInfo.isDynamic();
            shortcutInfoCompat.f3290u = shortcutInfo.isPinned();
            shortcutInfoCompat.f3291v = shortcutInfo.isDeclaredInManifest();
            shortcutInfoCompat.f3292w = shortcutInfo.isImmutable();
            shortcutInfoCompat.f3293x = shortcutInfo.isEnabled();
            shortcutInfoCompat.f3294y = shortcutInfo.hasKeyFieldsOnly();
            shortcutInfoCompat.f3282m = ShortcutInfoCompat.j(shortcutInfo);
            shortcutInfoCompat.f3284o = shortcutInfo.getRank();
            shortcutInfoCompat.f3285p = shortcutInfo.getExtras();
        }
    }
}
