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
    Context f3267a;

    /* renamed from: b  reason: collision with root package name */
    String f3268b;

    /* renamed from: c  reason: collision with root package name */
    String f3269c;

    /* renamed from: d  reason: collision with root package name */
    Intent[] f3270d;

    /* renamed from: e  reason: collision with root package name */
    ComponentName f3271e;

    /* renamed from: f  reason: collision with root package name */
    CharSequence f3272f;

    /* renamed from: g  reason: collision with root package name */
    CharSequence f3273g;

    /* renamed from: h  reason: collision with root package name */
    CharSequence f3274h;

    /* renamed from: i  reason: collision with root package name */
    IconCompat f3275i;

    /* renamed from: j  reason: collision with root package name */
    boolean f3276j;

    /* renamed from: k  reason: collision with root package name */
    Person[] f3277k;

    /* renamed from: l  reason: collision with root package name */
    Set f3278l;

    /* renamed from: m  reason: collision with root package name */
    c f3279m;

    /* renamed from: n  reason: collision with root package name */
    boolean f3280n;

    /* renamed from: o  reason: collision with root package name */
    int f3281o;

    /* renamed from: p  reason: collision with root package name */
    PersistableBundle f3282p;

    /* renamed from: q  reason: collision with root package name */
    long f3283q;

    /* renamed from: r  reason: collision with root package name */
    UserHandle f3284r;

    /* renamed from: s  reason: collision with root package name */
    boolean f3285s;

    /* renamed from: t  reason: collision with root package name */
    boolean f3286t;

    /* renamed from: u  reason: collision with root package name */
    boolean f3287u;

    /* renamed from: v  reason: collision with root package name */
    boolean f3288v;

    /* renamed from: w  reason: collision with root package name */
    boolean f3289w;

    /* renamed from: x  reason: collision with root package name */
    boolean f3290x = true;

    /* renamed from: y  reason: collision with root package name */
    boolean f3291y;

    /* renamed from: z  reason: collision with root package name */
    int f3292z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        static void a(ShortcutInfo.Builder builder, int i10) {
            builder.setExcludedFromSurfaces(i10);
        }
    }

    ShortcutInfoCompat() {
    }

    private PersistableBundle a() {
        if (this.f3282p == null) {
            this.f3282p = new PersistableBundle();
        }
        Person[] personArr = this.f3277k;
        if (personArr != null && personArr.length > 0) {
            this.f3282p.putInt("extraPersonCount", personArr.length);
            int i10 = 0;
            while (i10 < this.f3277k.length) {
                PersistableBundle persistableBundle = this.f3282p;
                StringBuilder sb2 = new StringBuilder();
                sb2.append("extraPerson_");
                int i11 = i10 + 1;
                sb2.append(i11);
                persistableBundle.putPersistableBundle(sb2.toString(), this.f3277k[i10].m());
                i10 = i11;
            }
        }
        c cVar = this.f3279m;
        if (cVar != null) {
            this.f3282p.putString("extraLocusId", cVar.a());
        }
        this.f3282p.putBoolean("extraLongLived", this.f3280n);
        return this.f3282p;
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
        return this.f3271e;
    }

    public Set d() {
        return this.f3278l;
    }

    public CharSequence e() {
        return this.f3274h;
    }

    public IconCompat f() {
        return this.f3275i;
    }

    public String g() {
        return this.f3268b;
    }

    public Intent h() {
        Intent[] intentArr = this.f3270d;
        return intentArr[intentArr.length - 1];
    }

    public Intent[] i() {
        Intent[] intentArr = this.f3270d;
        return (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
    }

    public CharSequence l() {
        return this.f3273g;
    }

    public int n() {
        return this.f3281o;
    }

    public CharSequence o() {
        return this.f3272f;
    }

    public boolean p(int i10) {
        if ((i10 & this.A) != 0) {
            return true;
        }
        return false;
    }

    public ShortcutInfo q() {
        p1.b.a();
        ShortcutInfo.Builder intents = p1.a.a(this.f3267a, this.f3268b).setShortLabel(this.f3272f).setIntents(this.f3270d);
        IconCompat iconCompat = this.f3275i;
        if (iconCompat != null) {
            intents.setIcon(iconCompat.w(this.f3267a));
        }
        if (!TextUtils.isEmpty(this.f3273g)) {
            intents.setLongLabel(this.f3273g);
        }
        if (!TextUtils.isEmpty(this.f3274h)) {
            intents.setDisabledMessage(this.f3274h);
        }
        ComponentName componentName = this.f3271e;
        if (componentName != null) {
            intents.setActivity(componentName);
        }
        Set<String> set = this.f3278l;
        if (set != null) {
            intents.setCategories(set);
        }
        intents.setRank(this.f3281o);
        PersistableBundle persistableBundle = this.f3282p;
        if (persistableBundle != null) {
            intents.setExtras(persistableBundle);
        }
        if (Build.VERSION.SDK_INT >= 29) {
            Person[] personArr = this.f3277k;
            if (personArr != null && personArr.length > 0) {
                int length = personArr.length;
                android.app.Person[] personArr2 = new android.app.Person[length];
                for (int i10 = 0; i10 < length; i10++) {
                    personArr2[i10] = this.f3277k[i10].k();
                }
                intents.setPersons(personArr2);
            }
            c cVar = this.f3279m;
            if (cVar != null) {
                intents.setLocusId(cVar.c());
            }
            intents.setLongLived(this.f3280n);
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
        private final ShortcutInfoCompat f3293a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f3294b;

        /* renamed from: c  reason: collision with root package name */
        private Set f3295c;

        /* renamed from: d  reason: collision with root package name */
        private Map f3296d;

        /* renamed from: e  reason: collision with root package name */
        private Uri f3297e;

        public b(Context context, String str) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3293a = shortcutInfoCompat;
            shortcutInfoCompat.f3267a = context;
            shortcutInfoCompat.f3268b = str;
        }

        public ShortcutInfoCompat a() {
            String[] strArr;
            if (!TextUtils.isEmpty(this.f3293a.f3272f)) {
                ShortcutInfoCompat shortcutInfoCompat = this.f3293a;
                Intent[] intentArr = shortcutInfoCompat.f3270d;
                if (intentArr != null && intentArr.length != 0) {
                    if (this.f3294b) {
                        if (shortcutInfoCompat.f3279m == null) {
                            shortcutInfoCompat.f3279m = new c(shortcutInfoCompat.f3268b);
                        }
                        this.f3293a.f3280n = true;
                    }
                    if (this.f3295c != null) {
                        ShortcutInfoCompat shortcutInfoCompat2 = this.f3293a;
                        if (shortcutInfoCompat2.f3278l == null) {
                            shortcutInfoCompat2.f3278l = new HashSet();
                        }
                        this.f3293a.f3278l.addAll(this.f3295c);
                    }
                    if (this.f3296d != null) {
                        ShortcutInfoCompat shortcutInfoCompat3 = this.f3293a;
                        if (shortcutInfoCompat3.f3282p == null) {
                            shortcutInfoCompat3.f3282p = new PersistableBundle();
                        }
                        for (String str : this.f3296d.keySet()) {
                            Map map = (Map) this.f3296d.get(str);
                            this.f3293a.f3282p.putStringArray(str, (String[]) map.keySet().toArray(new String[0]));
                            for (String str2 : map.keySet()) {
                                List list = (List) map.get(str2);
                                PersistableBundle persistableBundle = this.f3293a.f3282p;
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
                    if (this.f3297e != null) {
                        ShortcutInfoCompat shortcutInfoCompat4 = this.f3293a;
                        if (shortcutInfoCompat4.f3282p == null) {
                            shortcutInfoCompat4.f3282p = new PersistableBundle();
                        }
                        this.f3293a.f3282p.putString("extraSliceUri", v1.b.a(this.f3297e));
                    }
                    return this.f3293a;
                }
                throw new IllegalArgumentException("Shortcut must have an intent");
            }
            throw new IllegalArgumentException("Shortcut must have a non-empty label");
        }

        public b b(ComponentName componentName) {
            this.f3293a.f3271e = componentName;
            return this;
        }

        public b c(Set set) {
            u0.b bVar = new u0.b();
            bVar.addAll(set);
            this.f3293a.f3278l = bVar;
            return this;
        }

        public b d(CharSequence charSequence) {
            this.f3293a.f3274h = charSequence;
            return this;
        }

        public b e(IconCompat iconCompat) {
            this.f3293a.f3275i = iconCompat;
            return this;
        }

        public b f(Intent intent) {
            return g(new Intent[]{intent});
        }

        public b g(Intent[] intentArr) {
            this.f3293a.f3270d = intentArr;
            return this;
        }

        public b h(c cVar) {
            this.f3293a.f3279m = cVar;
            return this;
        }

        public b i(CharSequence charSequence) {
            this.f3293a.f3273g = charSequence;
            return this;
        }

        public b j(boolean z10) {
            this.f3293a.f3280n = z10;
            return this;
        }

        public b k(Person[] personArr) {
            this.f3293a.f3277k = personArr;
            return this;
        }

        public b l(int i10) {
            this.f3293a.f3281o = i10;
            return this;
        }

        public b m(CharSequence charSequence) {
            this.f3293a.f3272f = charSequence;
            return this;
        }

        public b(ShortcutInfoCompat shortcutInfoCompat) {
            ShortcutInfoCompat shortcutInfoCompat2 = new ShortcutInfoCompat();
            this.f3293a = shortcutInfoCompat2;
            shortcutInfoCompat2.f3267a = shortcutInfoCompat.f3267a;
            shortcutInfoCompat2.f3268b = shortcutInfoCompat.f3268b;
            shortcutInfoCompat2.f3269c = shortcutInfoCompat.f3269c;
            Intent[] intentArr = shortcutInfoCompat.f3270d;
            shortcutInfoCompat2.f3270d = (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
            shortcutInfoCompat2.f3271e = shortcutInfoCompat.f3271e;
            shortcutInfoCompat2.f3272f = shortcutInfoCompat.f3272f;
            shortcutInfoCompat2.f3273g = shortcutInfoCompat.f3273g;
            shortcutInfoCompat2.f3274h = shortcutInfoCompat.f3274h;
            shortcutInfoCompat2.f3292z = shortcutInfoCompat.f3292z;
            shortcutInfoCompat2.f3275i = shortcutInfoCompat.f3275i;
            shortcutInfoCompat2.f3276j = shortcutInfoCompat.f3276j;
            shortcutInfoCompat2.f3284r = shortcutInfoCompat.f3284r;
            shortcutInfoCompat2.f3283q = shortcutInfoCompat.f3283q;
            shortcutInfoCompat2.f3285s = shortcutInfoCompat.f3285s;
            shortcutInfoCompat2.f3286t = shortcutInfoCompat.f3286t;
            shortcutInfoCompat2.f3287u = shortcutInfoCompat.f3287u;
            shortcutInfoCompat2.f3288v = shortcutInfoCompat.f3288v;
            shortcutInfoCompat2.f3289w = shortcutInfoCompat.f3289w;
            shortcutInfoCompat2.f3290x = shortcutInfoCompat.f3290x;
            shortcutInfoCompat2.f3279m = shortcutInfoCompat.f3279m;
            shortcutInfoCompat2.f3280n = shortcutInfoCompat.f3280n;
            shortcutInfoCompat2.f3291y = shortcutInfoCompat.f3291y;
            shortcutInfoCompat2.f3281o = shortcutInfoCompat.f3281o;
            Person[] personArr = shortcutInfoCompat.f3277k;
            if (personArr != null) {
                shortcutInfoCompat2.f3277k = (Person[]) Arrays.copyOf(personArr, personArr.length);
            }
            if (shortcutInfoCompat.f3278l != null) {
                shortcutInfoCompat2.f3278l = new HashSet(shortcutInfoCompat.f3278l);
            }
            PersistableBundle persistableBundle = shortcutInfoCompat.f3282p;
            if (persistableBundle != null) {
                shortcutInfoCompat2.f3282p = persistableBundle;
            }
            shortcutInfoCompat2.A = shortcutInfoCompat.A;
        }

        public b(Context context, ShortcutInfo shortcutInfo) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3293a = shortcutInfoCompat;
            shortcutInfoCompat.f3267a = context;
            shortcutInfoCompat.f3268b = shortcutInfo.getId();
            shortcutInfoCompat.f3269c = shortcutInfo.getPackage();
            Intent[] intents = shortcutInfo.getIntents();
            shortcutInfoCompat.f3270d = (Intent[]) Arrays.copyOf(intents, intents.length);
            shortcutInfoCompat.f3271e = shortcutInfo.getActivity();
            shortcutInfoCompat.f3272f = shortcutInfo.getShortLabel();
            shortcutInfoCompat.f3273g = shortcutInfo.getLongLabel();
            shortcutInfoCompat.f3274h = shortcutInfo.getDisabledMessage();
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 28) {
                shortcutInfoCompat.f3292z = shortcutInfo.getDisabledReason();
            } else {
                shortcutInfoCompat.f3292z = shortcutInfo.isEnabled() ? 0 : 3;
            }
            shortcutInfoCompat.f3278l = shortcutInfo.getCategories();
            shortcutInfoCompat.f3277k = ShortcutInfoCompat.m(shortcutInfo.getExtras());
            shortcutInfoCompat.f3284r = shortcutInfo.getUserHandle();
            shortcutInfoCompat.f3283q = shortcutInfo.getLastChangedTimestamp();
            if (i10 >= 30) {
                shortcutInfoCompat.f3285s = shortcutInfo.isCached();
            }
            shortcutInfoCompat.f3286t = shortcutInfo.isDynamic();
            shortcutInfoCompat.f3287u = shortcutInfo.isPinned();
            shortcutInfoCompat.f3288v = shortcutInfo.isDeclaredInManifest();
            shortcutInfoCompat.f3289w = shortcutInfo.isImmutable();
            shortcutInfoCompat.f3290x = shortcutInfo.isEnabled();
            shortcutInfoCompat.f3291y = shortcutInfo.hasKeyFieldsOnly();
            shortcutInfoCompat.f3279m = ShortcutInfoCompat.j(shortcutInfo);
            shortcutInfoCompat.f3281o = shortcutInfo.getRank();
            shortcutInfoCompat.f3282p = shortcutInfo.getExtras();
        }
    }
}
