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
    Context f3160a;

    /* renamed from: b  reason: collision with root package name */
    String f3161b;

    /* renamed from: c  reason: collision with root package name */
    String f3162c;

    /* renamed from: d  reason: collision with root package name */
    Intent[] f3163d;

    /* renamed from: e  reason: collision with root package name */
    ComponentName f3164e;

    /* renamed from: f  reason: collision with root package name */
    CharSequence f3165f;

    /* renamed from: g  reason: collision with root package name */
    CharSequence f3166g;

    /* renamed from: h  reason: collision with root package name */
    CharSequence f3167h;

    /* renamed from: i  reason: collision with root package name */
    IconCompat f3168i;

    /* renamed from: j  reason: collision with root package name */
    boolean f3169j;

    /* renamed from: k  reason: collision with root package name */
    Person[] f3170k;

    /* renamed from: l  reason: collision with root package name */
    Set f3171l;

    /* renamed from: m  reason: collision with root package name */
    c f3172m;

    /* renamed from: n  reason: collision with root package name */
    boolean f3173n;

    /* renamed from: o  reason: collision with root package name */
    int f3174o;

    /* renamed from: p  reason: collision with root package name */
    PersistableBundle f3175p;

    /* renamed from: q  reason: collision with root package name */
    long f3176q;

    /* renamed from: r  reason: collision with root package name */
    UserHandle f3177r;

    /* renamed from: s  reason: collision with root package name */
    boolean f3178s;

    /* renamed from: t  reason: collision with root package name */
    boolean f3179t;

    /* renamed from: u  reason: collision with root package name */
    boolean f3180u;

    /* renamed from: v  reason: collision with root package name */
    boolean f3181v;

    /* renamed from: w  reason: collision with root package name */
    boolean f3182w;

    /* renamed from: x  reason: collision with root package name */
    boolean f3183x = true;

    /* renamed from: y  reason: collision with root package name */
    boolean f3184y;

    /* renamed from: z  reason: collision with root package name */
    int f3185z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        static void a(ShortcutInfo.Builder builder, int i10) {
            builder.setExcludedFromSurfaces(i10);
        }
    }

    ShortcutInfoCompat() {
    }

    private PersistableBundle a() {
        if (this.f3175p == null) {
            this.f3175p = new PersistableBundle();
        }
        Person[] personArr = this.f3170k;
        if (personArr != null && personArr.length > 0) {
            this.f3175p.putInt("extraPersonCount", personArr.length);
            int i10 = 0;
            while (i10 < this.f3170k.length) {
                PersistableBundle persistableBundle = this.f3175p;
                StringBuilder sb2 = new StringBuilder();
                sb2.append("extraPerson_");
                int i11 = i10 + 1;
                sb2.append(i11);
                persistableBundle.putPersistableBundle(sb2.toString(), this.f3170k[i10].m());
                i10 = i11;
            }
        }
        c cVar = this.f3172m;
        if (cVar != null) {
            this.f3175p.putString("extraLocusId", cVar.a());
        }
        this.f3175p.putBoolean("extraLongLived", this.f3173n);
        return this.f3175p;
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
        return this.f3164e;
    }

    public Set d() {
        return this.f3171l;
    }

    public CharSequence e() {
        return this.f3167h;
    }

    public IconCompat f() {
        return this.f3168i;
    }

    public String g() {
        return this.f3161b;
    }

    public Intent h() {
        Intent[] intentArr = this.f3163d;
        return intentArr[intentArr.length - 1];
    }

    public Intent[] i() {
        Intent[] intentArr = this.f3163d;
        return (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
    }

    public CharSequence l() {
        return this.f3166g;
    }

    public int n() {
        return this.f3174o;
    }

    public CharSequence o() {
        return this.f3165f;
    }

    public boolean p(int i10) {
        if ((i10 & this.A) != 0) {
            return true;
        }
        return false;
    }

    public ShortcutInfo q() {
        p1.b.a();
        ShortcutInfo.Builder intents = p1.a.a(this.f3160a, this.f3161b).setShortLabel(this.f3165f).setIntents(this.f3163d);
        IconCompat iconCompat = this.f3168i;
        if (iconCompat != null) {
            intents.setIcon(iconCompat.w(this.f3160a));
        }
        if (!TextUtils.isEmpty(this.f3166g)) {
            intents.setLongLabel(this.f3166g);
        }
        if (!TextUtils.isEmpty(this.f3167h)) {
            intents.setDisabledMessage(this.f3167h);
        }
        ComponentName componentName = this.f3164e;
        if (componentName != null) {
            intents.setActivity(componentName);
        }
        Set<String> set = this.f3171l;
        if (set != null) {
            intents.setCategories(set);
        }
        intents.setRank(this.f3174o);
        PersistableBundle persistableBundle = this.f3175p;
        if (persistableBundle != null) {
            intents.setExtras(persistableBundle);
        }
        if (Build.VERSION.SDK_INT >= 29) {
            Person[] personArr = this.f3170k;
            if (personArr != null && personArr.length > 0) {
                int length = personArr.length;
                android.app.Person[] personArr2 = new android.app.Person[length];
                for (int i10 = 0; i10 < length; i10++) {
                    personArr2[i10] = this.f3170k[i10].k();
                }
                intents.setPersons(personArr2);
            }
            c cVar = this.f3172m;
            if (cVar != null) {
                intents.setLocusId(cVar.c());
            }
            intents.setLongLived(this.f3173n);
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
        private final ShortcutInfoCompat f3186a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f3187b;

        /* renamed from: c  reason: collision with root package name */
        private Set f3188c;

        /* renamed from: d  reason: collision with root package name */
        private Map f3189d;

        /* renamed from: e  reason: collision with root package name */
        private Uri f3190e;

        public b(Context context, String str) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3186a = shortcutInfoCompat;
            shortcutInfoCompat.f3160a = context;
            shortcutInfoCompat.f3161b = str;
        }

        public ShortcutInfoCompat a() {
            String[] strArr;
            if (!TextUtils.isEmpty(this.f3186a.f3165f)) {
                ShortcutInfoCompat shortcutInfoCompat = this.f3186a;
                Intent[] intentArr = shortcutInfoCompat.f3163d;
                if (intentArr != null && intentArr.length != 0) {
                    if (this.f3187b) {
                        if (shortcutInfoCompat.f3172m == null) {
                            shortcutInfoCompat.f3172m = new c(shortcutInfoCompat.f3161b);
                        }
                        this.f3186a.f3173n = true;
                    }
                    if (this.f3188c != null) {
                        ShortcutInfoCompat shortcutInfoCompat2 = this.f3186a;
                        if (shortcutInfoCompat2.f3171l == null) {
                            shortcutInfoCompat2.f3171l = new HashSet();
                        }
                        this.f3186a.f3171l.addAll(this.f3188c);
                    }
                    if (this.f3189d != null) {
                        ShortcutInfoCompat shortcutInfoCompat3 = this.f3186a;
                        if (shortcutInfoCompat3.f3175p == null) {
                            shortcutInfoCompat3.f3175p = new PersistableBundle();
                        }
                        for (String str : this.f3189d.keySet()) {
                            Map map = (Map) this.f3189d.get(str);
                            this.f3186a.f3175p.putStringArray(str, (String[]) map.keySet().toArray(new String[0]));
                            for (String str2 : map.keySet()) {
                                List list = (List) map.get(str2);
                                PersistableBundle persistableBundle = this.f3186a.f3175p;
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
                    if (this.f3190e != null) {
                        ShortcutInfoCompat shortcutInfoCompat4 = this.f3186a;
                        if (shortcutInfoCompat4.f3175p == null) {
                            shortcutInfoCompat4.f3175p = new PersistableBundle();
                        }
                        this.f3186a.f3175p.putString("extraSliceUri", v1.b.a(this.f3190e));
                    }
                    return this.f3186a;
                }
                throw new IllegalArgumentException("Shortcut must have an intent");
            }
            throw new IllegalArgumentException("Shortcut must have a non-empty label");
        }

        public b b(ComponentName componentName) {
            this.f3186a.f3164e = componentName;
            return this;
        }

        public b c(Set set) {
            u0.b bVar = new u0.b();
            bVar.addAll(set);
            this.f3186a.f3171l = bVar;
            return this;
        }

        public b d(CharSequence charSequence) {
            this.f3186a.f3167h = charSequence;
            return this;
        }

        public b e(IconCompat iconCompat) {
            this.f3186a.f3168i = iconCompat;
            return this;
        }

        public b f(Intent intent) {
            return g(new Intent[]{intent});
        }

        public b g(Intent[] intentArr) {
            this.f3186a.f3163d = intentArr;
            return this;
        }

        public b h(c cVar) {
            this.f3186a.f3172m = cVar;
            return this;
        }

        public b i(CharSequence charSequence) {
            this.f3186a.f3166g = charSequence;
            return this;
        }

        public b j(boolean z10) {
            this.f3186a.f3173n = z10;
            return this;
        }

        public b k(Person[] personArr) {
            this.f3186a.f3170k = personArr;
            return this;
        }

        public b l(int i10) {
            this.f3186a.f3174o = i10;
            return this;
        }

        public b m(CharSequence charSequence) {
            this.f3186a.f3165f = charSequence;
            return this;
        }

        public b(ShortcutInfoCompat shortcutInfoCompat) {
            ShortcutInfoCompat shortcutInfoCompat2 = new ShortcutInfoCompat();
            this.f3186a = shortcutInfoCompat2;
            shortcutInfoCompat2.f3160a = shortcutInfoCompat.f3160a;
            shortcutInfoCompat2.f3161b = shortcutInfoCompat.f3161b;
            shortcutInfoCompat2.f3162c = shortcutInfoCompat.f3162c;
            Intent[] intentArr = shortcutInfoCompat.f3163d;
            shortcutInfoCompat2.f3163d = (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
            shortcutInfoCompat2.f3164e = shortcutInfoCompat.f3164e;
            shortcutInfoCompat2.f3165f = shortcutInfoCompat.f3165f;
            shortcutInfoCompat2.f3166g = shortcutInfoCompat.f3166g;
            shortcutInfoCompat2.f3167h = shortcutInfoCompat.f3167h;
            shortcutInfoCompat2.f3185z = shortcutInfoCompat.f3185z;
            shortcutInfoCompat2.f3168i = shortcutInfoCompat.f3168i;
            shortcutInfoCompat2.f3169j = shortcutInfoCompat.f3169j;
            shortcutInfoCompat2.f3177r = shortcutInfoCompat.f3177r;
            shortcutInfoCompat2.f3176q = shortcutInfoCompat.f3176q;
            shortcutInfoCompat2.f3178s = shortcutInfoCompat.f3178s;
            shortcutInfoCompat2.f3179t = shortcutInfoCompat.f3179t;
            shortcutInfoCompat2.f3180u = shortcutInfoCompat.f3180u;
            shortcutInfoCompat2.f3181v = shortcutInfoCompat.f3181v;
            shortcutInfoCompat2.f3182w = shortcutInfoCompat.f3182w;
            shortcutInfoCompat2.f3183x = shortcutInfoCompat.f3183x;
            shortcutInfoCompat2.f3172m = shortcutInfoCompat.f3172m;
            shortcutInfoCompat2.f3173n = shortcutInfoCompat.f3173n;
            shortcutInfoCompat2.f3184y = shortcutInfoCompat.f3184y;
            shortcutInfoCompat2.f3174o = shortcutInfoCompat.f3174o;
            Person[] personArr = shortcutInfoCompat.f3170k;
            if (personArr != null) {
                shortcutInfoCompat2.f3170k = (Person[]) Arrays.copyOf(personArr, personArr.length);
            }
            if (shortcutInfoCompat.f3171l != null) {
                shortcutInfoCompat2.f3171l = new HashSet(shortcutInfoCompat.f3171l);
            }
            PersistableBundle persistableBundle = shortcutInfoCompat.f3175p;
            if (persistableBundle != null) {
                shortcutInfoCompat2.f3175p = persistableBundle;
            }
            shortcutInfoCompat2.A = shortcutInfoCompat.A;
        }

        public b(Context context, ShortcutInfo shortcutInfo) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3186a = shortcutInfoCompat;
            shortcutInfoCompat.f3160a = context;
            shortcutInfoCompat.f3161b = shortcutInfo.getId();
            shortcutInfoCompat.f3162c = shortcutInfo.getPackage();
            Intent[] intents = shortcutInfo.getIntents();
            shortcutInfoCompat.f3163d = (Intent[]) Arrays.copyOf(intents, intents.length);
            shortcutInfoCompat.f3164e = shortcutInfo.getActivity();
            shortcutInfoCompat.f3165f = shortcutInfo.getShortLabel();
            shortcutInfoCompat.f3166g = shortcutInfo.getLongLabel();
            shortcutInfoCompat.f3167h = shortcutInfo.getDisabledMessage();
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 28) {
                shortcutInfoCompat.f3185z = shortcutInfo.getDisabledReason();
            } else {
                shortcutInfoCompat.f3185z = shortcutInfo.isEnabled() ? 0 : 3;
            }
            shortcutInfoCompat.f3171l = shortcutInfo.getCategories();
            shortcutInfoCompat.f3170k = ShortcutInfoCompat.m(shortcutInfo.getExtras());
            shortcutInfoCompat.f3177r = shortcutInfo.getUserHandle();
            shortcutInfoCompat.f3176q = shortcutInfo.getLastChangedTimestamp();
            if (i10 >= 30) {
                shortcutInfoCompat.f3178s = shortcutInfo.isCached();
            }
            shortcutInfoCompat.f3179t = shortcutInfo.isDynamic();
            shortcutInfoCompat.f3180u = shortcutInfo.isPinned();
            shortcutInfoCompat.f3181v = shortcutInfo.isDeclaredInManifest();
            shortcutInfoCompat.f3182w = shortcutInfo.isImmutable();
            shortcutInfoCompat.f3183x = shortcutInfo.isEnabled();
            shortcutInfoCompat.f3184y = shortcutInfo.hasKeyFieldsOnly();
            shortcutInfoCompat.f3172m = ShortcutInfoCompat.j(shortcutInfo);
            shortcutInfoCompat.f3174o = shortcutInfo.getRank();
            shortcutInfoCompat.f3175p = shortcutInfo.getExtras();
        }
    }
}
