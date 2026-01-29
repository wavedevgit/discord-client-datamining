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
    Context f3116a;

    /* renamed from: b  reason: collision with root package name */
    String f3117b;

    /* renamed from: c  reason: collision with root package name */
    String f3118c;

    /* renamed from: d  reason: collision with root package name */
    Intent[] f3119d;

    /* renamed from: e  reason: collision with root package name */
    ComponentName f3120e;

    /* renamed from: f  reason: collision with root package name */
    CharSequence f3121f;

    /* renamed from: g  reason: collision with root package name */
    CharSequence f3122g;

    /* renamed from: h  reason: collision with root package name */
    CharSequence f3123h;

    /* renamed from: i  reason: collision with root package name */
    IconCompat f3124i;

    /* renamed from: j  reason: collision with root package name */
    boolean f3125j;

    /* renamed from: k  reason: collision with root package name */
    Person[] f3126k;

    /* renamed from: l  reason: collision with root package name */
    Set f3127l;

    /* renamed from: m  reason: collision with root package name */
    c f3128m;

    /* renamed from: n  reason: collision with root package name */
    boolean f3129n;

    /* renamed from: o  reason: collision with root package name */
    int f3130o;

    /* renamed from: p  reason: collision with root package name */
    PersistableBundle f3131p;

    /* renamed from: q  reason: collision with root package name */
    long f3132q;

    /* renamed from: r  reason: collision with root package name */
    UserHandle f3133r;

    /* renamed from: s  reason: collision with root package name */
    boolean f3134s;

    /* renamed from: t  reason: collision with root package name */
    boolean f3135t;

    /* renamed from: u  reason: collision with root package name */
    boolean f3136u;

    /* renamed from: v  reason: collision with root package name */
    boolean f3137v;

    /* renamed from: w  reason: collision with root package name */
    boolean f3138w;

    /* renamed from: x  reason: collision with root package name */
    boolean f3139x = true;

    /* renamed from: y  reason: collision with root package name */
    boolean f3140y;

    /* renamed from: z  reason: collision with root package name */
    int f3141z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        static void a(ShortcutInfo.Builder builder, int i10) {
            builder.setExcludedFromSurfaces(i10);
        }
    }

    ShortcutInfoCompat() {
    }

    private PersistableBundle a() {
        if (this.f3131p == null) {
            this.f3131p = new PersistableBundle();
        }
        Person[] personArr = this.f3126k;
        if (personArr != null && personArr.length > 0) {
            this.f3131p.putInt("extraPersonCount", personArr.length);
            int i10 = 0;
            while (i10 < this.f3126k.length) {
                PersistableBundle persistableBundle = this.f3131p;
                StringBuilder sb2 = new StringBuilder();
                sb2.append("extraPerson_");
                int i11 = i10 + 1;
                sb2.append(i11);
                persistableBundle.putPersistableBundle(sb2.toString(), this.f3126k[i10].m());
                i10 = i11;
            }
        }
        c cVar = this.f3128m;
        if (cVar != null) {
            this.f3131p.putString("extraLocusId", cVar.a());
        }
        this.f3131p.putBoolean("extraLongLived", this.f3129n);
        return this.f3131p;
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
        return this.f3120e;
    }

    public Set d() {
        return this.f3127l;
    }

    public CharSequence e() {
        return this.f3123h;
    }

    public IconCompat f() {
        return this.f3124i;
    }

    public String g() {
        return this.f3117b;
    }

    public Intent h() {
        Intent[] intentArr = this.f3119d;
        return intentArr[intentArr.length - 1];
    }

    public Intent[] i() {
        Intent[] intentArr = this.f3119d;
        return (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
    }

    public CharSequence l() {
        return this.f3122g;
    }

    public int n() {
        return this.f3130o;
    }

    public CharSequence o() {
        return this.f3121f;
    }

    public boolean p(int i10) {
        if ((i10 & this.A) != 0) {
            return true;
        }
        return false;
    }

    public ShortcutInfo q() {
        p1.b.a();
        ShortcutInfo.Builder intents = p1.a.a(this.f3116a, this.f3117b).setShortLabel(this.f3121f).setIntents(this.f3119d);
        IconCompat iconCompat = this.f3124i;
        if (iconCompat != null) {
            intents.setIcon(iconCompat.w(this.f3116a));
        }
        if (!TextUtils.isEmpty(this.f3122g)) {
            intents.setLongLabel(this.f3122g);
        }
        if (!TextUtils.isEmpty(this.f3123h)) {
            intents.setDisabledMessage(this.f3123h);
        }
        ComponentName componentName = this.f3120e;
        if (componentName != null) {
            intents.setActivity(componentName);
        }
        Set<String> set = this.f3127l;
        if (set != null) {
            intents.setCategories(set);
        }
        intents.setRank(this.f3130o);
        PersistableBundle persistableBundle = this.f3131p;
        if (persistableBundle != null) {
            intents.setExtras(persistableBundle);
        }
        if (Build.VERSION.SDK_INT >= 29) {
            Person[] personArr = this.f3126k;
            if (personArr != null && personArr.length > 0) {
                int length = personArr.length;
                android.app.Person[] personArr2 = new android.app.Person[length];
                for (int i10 = 0; i10 < length; i10++) {
                    personArr2[i10] = this.f3126k[i10].k();
                }
                intents.setPersons(personArr2);
            }
            c cVar = this.f3128m;
            if (cVar != null) {
                intents.setLocusId(cVar.c());
            }
            intents.setLongLived(this.f3129n);
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
        private final ShortcutInfoCompat f3142a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f3143b;

        /* renamed from: c  reason: collision with root package name */
        private Set f3144c;

        /* renamed from: d  reason: collision with root package name */
        private Map f3145d;

        /* renamed from: e  reason: collision with root package name */
        private Uri f3146e;

        public b(Context context, String str) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3142a = shortcutInfoCompat;
            shortcutInfoCompat.f3116a = context;
            shortcutInfoCompat.f3117b = str;
        }

        public ShortcutInfoCompat a() {
            String[] strArr;
            if (!TextUtils.isEmpty(this.f3142a.f3121f)) {
                ShortcutInfoCompat shortcutInfoCompat = this.f3142a;
                Intent[] intentArr = shortcutInfoCompat.f3119d;
                if (intentArr != null && intentArr.length != 0) {
                    if (this.f3143b) {
                        if (shortcutInfoCompat.f3128m == null) {
                            shortcutInfoCompat.f3128m = new c(shortcutInfoCompat.f3117b);
                        }
                        this.f3142a.f3129n = true;
                    }
                    if (this.f3144c != null) {
                        ShortcutInfoCompat shortcutInfoCompat2 = this.f3142a;
                        if (shortcutInfoCompat2.f3127l == null) {
                            shortcutInfoCompat2.f3127l = new HashSet();
                        }
                        this.f3142a.f3127l.addAll(this.f3144c);
                    }
                    if (this.f3145d != null) {
                        ShortcutInfoCompat shortcutInfoCompat3 = this.f3142a;
                        if (shortcutInfoCompat3.f3131p == null) {
                            shortcutInfoCompat3.f3131p = new PersistableBundle();
                        }
                        for (String str : this.f3145d.keySet()) {
                            Map map = (Map) this.f3145d.get(str);
                            this.f3142a.f3131p.putStringArray(str, (String[]) map.keySet().toArray(new String[0]));
                            for (String str2 : map.keySet()) {
                                List list = (List) map.get(str2);
                                PersistableBundle persistableBundle = this.f3142a.f3131p;
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
                    if (this.f3146e != null) {
                        ShortcutInfoCompat shortcutInfoCompat4 = this.f3142a;
                        if (shortcutInfoCompat4.f3131p == null) {
                            shortcutInfoCompat4.f3131p = new PersistableBundle();
                        }
                        this.f3142a.f3131p.putString("extraSliceUri", v1.b.a(this.f3146e));
                    }
                    return this.f3142a;
                }
                throw new IllegalArgumentException("Shortcut must have an intent");
            }
            throw new IllegalArgumentException("Shortcut must have a non-empty label");
        }

        public b b(ComponentName componentName) {
            this.f3142a.f3120e = componentName;
            return this;
        }

        public b c(Set set) {
            u0.b bVar = new u0.b();
            bVar.addAll(set);
            this.f3142a.f3127l = bVar;
            return this;
        }

        public b d(CharSequence charSequence) {
            this.f3142a.f3123h = charSequence;
            return this;
        }

        public b e(IconCompat iconCompat) {
            this.f3142a.f3124i = iconCompat;
            return this;
        }

        public b f(Intent intent) {
            return g(new Intent[]{intent});
        }

        public b g(Intent[] intentArr) {
            this.f3142a.f3119d = intentArr;
            return this;
        }

        public b h(c cVar) {
            this.f3142a.f3128m = cVar;
            return this;
        }

        public b i(CharSequence charSequence) {
            this.f3142a.f3122g = charSequence;
            return this;
        }

        public b j(boolean z10) {
            this.f3142a.f3129n = z10;
            return this;
        }

        public b k(Person[] personArr) {
            this.f3142a.f3126k = personArr;
            return this;
        }

        public b l(int i10) {
            this.f3142a.f3130o = i10;
            return this;
        }

        public b m(CharSequence charSequence) {
            this.f3142a.f3121f = charSequence;
            return this;
        }

        public b(ShortcutInfoCompat shortcutInfoCompat) {
            ShortcutInfoCompat shortcutInfoCompat2 = new ShortcutInfoCompat();
            this.f3142a = shortcutInfoCompat2;
            shortcutInfoCompat2.f3116a = shortcutInfoCompat.f3116a;
            shortcutInfoCompat2.f3117b = shortcutInfoCompat.f3117b;
            shortcutInfoCompat2.f3118c = shortcutInfoCompat.f3118c;
            Intent[] intentArr = shortcutInfoCompat.f3119d;
            shortcutInfoCompat2.f3119d = (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
            shortcutInfoCompat2.f3120e = shortcutInfoCompat.f3120e;
            shortcutInfoCompat2.f3121f = shortcutInfoCompat.f3121f;
            shortcutInfoCompat2.f3122g = shortcutInfoCompat.f3122g;
            shortcutInfoCompat2.f3123h = shortcutInfoCompat.f3123h;
            shortcutInfoCompat2.f3141z = shortcutInfoCompat.f3141z;
            shortcutInfoCompat2.f3124i = shortcutInfoCompat.f3124i;
            shortcutInfoCompat2.f3125j = shortcutInfoCompat.f3125j;
            shortcutInfoCompat2.f3133r = shortcutInfoCompat.f3133r;
            shortcutInfoCompat2.f3132q = shortcutInfoCompat.f3132q;
            shortcutInfoCompat2.f3134s = shortcutInfoCompat.f3134s;
            shortcutInfoCompat2.f3135t = shortcutInfoCompat.f3135t;
            shortcutInfoCompat2.f3136u = shortcutInfoCompat.f3136u;
            shortcutInfoCompat2.f3137v = shortcutInfoCompat.f3137v;
            shortcutInfoCompat2.f3138w = shortcutInfoCompat.f3138w;
            shortcutInfoCompat2.f3139x = shortcutInfoCompat.f3139x;
            shortcutInfoCompat2.f3128m = shortcutInfoCompat.f3128m;
            shortcutInfoCompat2.f3129n = shortcutInfoCompat.f3129n;
            shortcutInfoCompat2.f3140y = shortcutInfoCompat.f3140y;
            shortcutInfoCompat2.f3130o = shortcutInfoCompat.f3130o;
            Person[] personArr = shortcutInfoCompat.f3126k;
            if (personArr != null) {
                shortcutInfoCompat2.f3126k = (Person[]) Arrays.copyOf(personArr, personArr.length);
            }
            if (shortcutInfoCompat.f3127l != null) {
                shortcutInfoCompat2.f3127l = new HashSet(shortcutInfoCompat.f3127l);
            }
            PersistableBundle persistableBundle = shortcutInfoCompat.f3131p;
            if (persistableBundle != null) {
                shortcutInfoCompat2.f3131p = persistableBundle;
            }
            shortcutInfoCompat2.A = shortcutInfoCompat.A;
        }

        public b(Context context, ShortcutInfo shortcutInfo) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3142a = shortcutInfoCompat;
            shortcutInfoCompat.f3116a = context;
            shortcutInfoCompat.f3117b = shortcutInfo.getId();
            shortcutInfoCompat.f3118c = shortcutInfo.getPackage();
            Intent[] intents = shortcutInfo.getIntents();
            shortcutInfoCompat.f3119d = (Intent[]) Arrays.copyOf(intents, intents.length);
            shortcutInfoCompat.f3120e = shortcutInfo.getActivity();
            shortcutInfoCompat.f3121f = shortcutInfo.getShortLabel();
            shortcutInfoCompat.f3122g = shortcutInfo.getLongLabel();
            shortcutInfoCompat.f3123h = shortcutInfo.getDisabledMessage();
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 28) {
                shortcutInfoCompat.f3141z = shortcutInfo.getDisabledReason();
            } else {
                shortcutInfoCompat.f3141z = shortcutInfo.isEnabled() ? 0 : 3;
            }
            shortcutInfoCompat.f3127l = shortcutInfo.getCategories();
            shortcutInfoCompat.f3126k = ShortcutInfoCompat.m(shortcutInfo.getExtras());
            shortcutInfoCompat.f3133r = shortcutInfo.getUserHandle();
            shortcutInfoCompat.f3132q = shortcutInfo.getLastChangedTimestamp();
            if (i10 >= 30) {
                shortcutInfoCompat.f3134s = shortcutInfo.isCached();
            }
            shortcutInfoCompat.f3135t = shortcutInfo.isDynamic();
            shortcutInfoCompat.f3136u = shortcutInfo.isPinned();
            shortcutInfoCompat.f3137v = shortcutInfo.isDeclaredInManifest();
            shortcutInfoCompat.f3138w = shortcutInfo.isImmutable();
            shortcutInfoCompat.f3139x = shortcutInfo.isEnabled();
            shortcutInfoCompat.f3140y = shortcutInfo.hasKeyFieldsOnly();
            shortcutInfoCompat.f3128m = ShortcutInfoCompat.j(shortcutInfo);
            shortcutInfoCompat.f3130o = shortcutInfo.getRank();
            shortcutInfoCompat.f3131p = shortcutInfo.getExtras();
        }
    }
}
