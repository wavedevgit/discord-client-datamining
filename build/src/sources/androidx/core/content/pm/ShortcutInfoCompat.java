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
    Context f3129a;

    /* renamed from: b  reason: collision with root package name */
    String f3130b;

    /* renamed from: c  reason: collision with root package name */
    String f3131c;

    /* renamed from: d  reason: collision with root package name */
    Intent[] f3132d;

    /* renamed from: e  reason: collision with root package name */
    ComponentName f3133e;

    /* renamed from: f  reason: collision with root package name */
    CharSequence f3134f;

    /* renamed from: g  reason: collision with root package name */
    CharSequence f3135g;

    /* renamed from: h  reason: collision with root package name */
    CharSequence f3136h;

    /* renamed from: i  reason: collision with root package name */
    IconCompat f3137i;

    /* renamed from: j  reason: collision with root package name */
    boolean f3138j;

    /* renamed from: k  reason: collision with root package name */
    Person[] f3139k;

    /* renamed from: l  reason: collision with root package name */
    Set f3140l;

    /* renamed from: m  reason: collision with root package name */
    c f3141m;

    /* renamed from: n  reason: collision with root package name */
    boolean f3142n;

    /* renamed from: o  reason: collision with root package name */
    int f3143o;

    /* renamed from: p  reason: collision with root package name */
    PersistableBundle f3144p;

    /* renamed from: q  reason: collision with root package name */
    long f3145q;

    /* renamed from: r  reason: collision with root package name */
    UserHandle f3146r;

    /* renamed from: s  reason: collision with root package name */
    boolean f3147s;

    /* renamed from: t  reason: collision with root package name */
    boolean f3148t;

    /* renamed from: u  reason: collision with root package name */
    boolean f3149u;

    /* renamed from: v  reason: collision with root package name */
    boolean f3150v;

    /* renamed from: w  reason: collision with root package name */
    boolean f3151w;

    /* renamed from: x  reason: collision with root package name */
    boolean f3152x = true;

    /* renamed from: y  reason: collision with root package name */
    boolean f3153y;

    /* renamed from: z  reason: collision with root package name */
    int f3154z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        static void a(ShortcutInfo.Builder builder, int i10) {
            builder.setExcludedFromSurfaces(i10);
        }
    }

    ShortcutInfoCompat() {
    }

    private PersistableBundle a() {
        if (this.f3144p == null) {
            this.f3144p = new PersistableBundle();
        }
        Person[] personArr = this.f3139k;
        if (personArr != null && personArr.length > 0) {
            this.f3144p.putInt("extraPersonCount", personArr.length);
            int i10 = 0;
            while (i10 < this.f3139k.length) {
                PersistableBundle persistableBundle = this.f3144p;
                StringBuilder sb2 = new StringBuilder();
                sb2.append("extraPerson_");
                int i11 = i10 + 1;
                sb2.append(i11);
                persistableBundle.putPersistableBundle(sb2.toString(), this.f3139k[i10].m());
                i10 = i11;
            }
        }
        c cVar = this.f3141m;
        if (cVar != null) {
            this.f3144p.putString("extraLocusId", cVar.a());
        }
        this.f3144p.putBoolean("extraLongLived", this.f3142n);
        return this.f3144p;
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
        return this.f3133e;
    }

    public Set d() {
        return this.f3140l;
    }

    public CharSequence e() {
        return this.f3136h;
    }

    public IconCompat f() {
        return this.f3137i;
    }

    public String g() {
        return this.f3130b;
    }

    public Intent h() {
        Intent[] intentArr = this.f3132d;
        return intentArr[intentArr.length - 1];
    }

    public Intent[] i() {
        Intent[] intentArr = this.f3132d;
        return (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
    }

    public CharSequence l() {
        return this.f3135g;
    }

    public int n() {
        return this.f3143o;
    }

    public CharSequence o() {
        return this.f3134f;
    }

    public boolean p(int i10) {
        if ((i10 & this.A) != 0) {
            return true;
        }
        return false;
    }

    public ShortcutInfo q() {
        p1.b.a();
        ShortcutInfo.Builder intents = p1.a.a(this.f3129a, this.f3130b).setShortLabel(this.f3134f).setIntents(this.f3132d);
        IconCompat iconCompat = this.f3137i;
        if (iconCompat != null) {
            intents.setIcon(iconCompat.w(this.f3129a));
        }
        if (!TextUtils.isEmpty(this.f3135g)) {
            intents.setLongLabel(this.f3135g);
        }
        if (!TextUtils.isEmpty(this.f3136h)) {
            intents.setDisabledMessage(this.f3136h);
        }
        ComponentName componentName = this.f3133e;
        if (componentName != null) {
            intents.setActivity(componentName);
        }
        Set<String> set = this.f3140l;
        if (set != null) {
            intents.setCategories(set);
        }
        intents.setRank(this.f3143o);
        PersistableBundle persistableBundle = this.f3144p;
        if (persistableBundle != null) {
            intents.setExtras(persistableBundle);
        }
        if (Build.VERSION.SDK_INT >= 29) {
            Person[] personArr = this.f3139k;
            if (personArr != null && personArr.length > 0) {
                int length = personArr.length;
                android.app.Person[] personArr2 = new android.app.Person[length];
                for (int i10 = 0; i10 < length; i10++) {
                    personArr2[i10] = this.f3139k[i10].k();
                }
                intents.setPersons(personArr2);
            }
            c cVar = this.f3141m;
            if (cVar != null) {
                intents.setLocusId(cVar.c());
            }
            intents.setLongLived(this.f3142n);
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
        private final ShortcutInfoCompat f3155a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f3156b;

        /* renamed from: c  reason: collision with root package name */
        private Set f3157c;

        /* renamed from: d  reason: collision with root package name */
        private Map f3158d;

        /* renamed from: e  reason: collision with root package name */
        private Uri f3159e;

        public b(Context context, String str) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3155a = shortcutInfoCompat;
            shortcutInfoCompat.f3129a = context;
            shortcutInfoCompat.f3130b = str;
        }

        public ShortcutInfoCompat a() {
            String[] strArr;
            if (!TextUtils.isEmpty(this.f3155a.f3134f)) {
                ShortcutInfoCompat shortcutInfoCompat = this.f3155a;
                Intent[] intentArr = shortcutInfoCompat.f3132d;
                if (intentArr != null && intentArr.length != 0) {
                    if (this.f3156b) {
                        if (shortcutInfoCompat.f3141m == null) {
                            shortcutInfoCompat.f3141m = new c(shortcutInfoCompat.f3130b);
                        }
                        this.f3155a.f3142n = true;
                    }
                    if (this.f3157c != null) {
                        ShortcutInfoCompat shortcutInfoCompat2 = this.f3155a;
                        if (shortcutInfoCompat2.f3140l == null) {
                            shortcutInfoCompat2.f3140l = new HashSet();
                        }
                        this.f3155a.f3140l.addAll(this.f3157c);
                    }
                    if (this.f3158d != null) {
                        ShortcutInfoCompat shortcutInfoCompat3 = this.f3155a;
                        if (shortcutInfoCompat3.f3144p == null) {
                            shortcutInfoCompat3.f3144p = new PersistableBundle();
                        }
                        for (String str : this.f3158d.keySet()) {
                            Map map = (Map) this.f3158d.get(str);
                            this.f3155a.f3144p.putStringArray(str, (String[]) map.keySet().toArray(new String[0]));
                            for (String str2 : map.keySet()) {
                                List list = (List) map.get(str2);
                                PersistableBundle persistableBundle = this.f3155a.f3144p;
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
                    if (this.f3159e != null) {
                        ShortcutInfoCompat shortcutInfoCompat4 = this.f3155a;
                        if (shortcutInfoCompat4.f3144p == null) {
                            shortcutInfoCompat4.f3144p = new PersistableBundle();
                        }
                        this.f3155a.f3144p.putString("extraSliceUri", v1.b.a(this.f3159e));
                    }
                    return this.f3155a;
                }
                throw new IllegalArgumentException("Shortcut must have an intent");
            }
            throw new IllegalArgumentException("Shortcut must have a non-empty label");
        }

        public b b(ComponentName componentName) {
            this.f3155a.f3133e = componentName;
            return this;
        }

        public b c(Set set) {
            u0.b bVar = new u0.b();
            bVar.addAll(set);
            this.f3155a.f3140l = bVar;
            return this;
        }

        public b d(CharSequence charSequence) {
            this.f3155a.f3136h = charSequence;
            return this;
        }

        public b e(IconCompat iconCompat) {
            this.f3155a.f3137i = iconCompat;
            return this;
        }

        public b f(Intent intent) {
            return g(new Intent[]{intent});
        }

        public b g(Intent[] intentArr) {
            this.f3155a.f3132d = intentArr;
            return this;
        }

        public b h(c cVar) {
            this.f3155a.f3141m = cVar;
            return this;
        }

        public b i(CharSequence charSequence) {
            this.f3155a.f3135g = charSequence;
            return this;
        }

        public b j(boolean z10) {
            this.f3155a.f3142n = z10;
            return this;
        }

        public b k(Person[] personArr) {
            this.f3155a.f3139k = personArr;
            return this;
        }

        public b l(int i10) {
            this.f3155a.f3143o = i10;
            return this;
        }

        public b m(CharSequence charSequence) {
            this.f3155a.f3134f = charSequence;
            return this;
        }

        public b(ShortcutInfoCompat shortcutInfoCompat) {
            ShortcutInfoCompat shortcutInfoCompat2 = new ShortcutInfoCompat();
            this.f3155a = shortcutInfoCompat2;
            shortcutInfoCompat2.f3129a = shortcutInfoCompat.f3129a;
            shortcutInfoCompat2.f3130b = shortcutInfoCompat.f3130b;
            shortcutInfoCompat2.f3131c = shortcutInfoCompat.f3131c;
            Intent[] intentArr = shortcutInfoCompat.f3132d;
            shortcutInfoCompat2.f3132d = (Intent[]) Arrays.copyOf(intentArr, intentArr.length);
            shortcutInfoCompat2.f3133e = shortcutInfoCompat.f3133e;
            shortcutInfoCompat2.f3134f = shortcutInfoCompat.f3134f;
            shortcutInfoCompat2.f3135g = shortcutInfoCompat.f3135g;
            shortcutInfoCompat2.f3136h = shortcutInfoCompat.f3136h;
            shortcutInfoCompat2.f3154z = shortcutInfoCompat.f3154z;
            shortcutInfoCompat2.f3137i = shortcutInfoCompat.f3137i;
            shortcutInfoCompat2.f3138j = shortcutInfoCompat.f3138j;
            shortcutInfoCompat2.f3146r = shortcutInfoCompat.f3146r;
            shortcutInfoCompat2.f3145q = shortcutInfoCompat.f3145q;
            shortcutInfoCompat2.f3147s = shortcutInfoCompat.f3147s;
            shortcutInfoCompat2.f3148t = shortcutInfoCompat.f3148t;
            shortcutInfoCompat2.f3149u = shortcutInfoCompat.f3149u;
            shortcutInfoCompat2.f3150v = shortcutInfoCompat.f3150v;
            shortcutInfoCompat2.f3151w = shortcutInfoCompat.f3151w;
            shortcutInfoCompat2.f3152x = shortcutInfoCompat.f3152x;
            shortcutInfoCompat2.f3141m = shortcutInfoCompat.f3141m;
            shortcutInfoCompat2.f3142n = shortcutInfoCompat.f3142n;
            shortcutInfoCompat2.f3153y = shortcutInfoCompat.f3153y;
            shortcutInfoCompat2.f3143o = shortcutInfoCompat.f3143o;
            Person[] personArr = shortcutInfoCompat.f3139k;
            if (personArr != null) {
                shortcutInfoCompat2.f3139k = (Person[]) Arrays.copyOf(personArr, personArr.length);
            }
            if (shortcutInfoCompat.f3140l != null) {
                shortcutInfoCompat2.f3140l = new HashSet(shortcutInfoCompat.f3140l);
            }
            PersistableBundle persistableBundle = shortcutInfoCompat.f3144p;
            if (persistableBundle != null) {
                shortcutInfoCompat2.f3144p = persistableBundle;
            }
            shortcutInfoCompat2.A = shortcutInfoCompat.A;
        }

        public b(Context context, ShortcutInfo shortcutInfo) {
            ShortcutInfoCompat shortcutInfoCompat = new ShortcutInfoCompat();
            this.f3155a = shortcutInfoCompat;
            shortcutInfoCompat.f3129a = context;
            shortcutInfoCompat.f3130b = shortcutInfo.getId();
            shortcutInfoCompat.f3131c = shortcutInfo.getPackage();
            Intent[] intents = shortcutInfo.getIntents();
            shortcutInfoCompat.f3132d = (Intent[]) Arrays.copyOf(intents, intents.length);
            shortcutInfoCompat.f3133e = shortcutInfo.getActivity();
            shortcutInfoCompat.f3134f = shortcutInfo.getShortLabel();
            shortcutInfoCompat.f3135g = shortcutInfo.getLongLabel();
            shortcutInfoCompat.f3136h = shortcutInfo.getDisabledMessage();
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 28) {
                shortcutInfoCompat.f3154z = shortcutInfo.getDisabledReason();
            } else {
                shortcutInfoCompat.f3154z = shortcutInfo.isEnabled() ? 0 : 3;
            }
            shortcutInfoCompat.f3140l = shortcutInfo.getCategories();
            shortcutInfoCompat.f3139k = ShortcutInfoCompat.m(shortcutInfo.getExtras());
            shortcutInfoCompat.f3146r = shortcutInfo.getUserHandle();
            shortcutInfoCompat.f3145q = shortcutInfo.getLastChangedTimestamp();
            if (i10 >= 30) {
                shortcutInfoCompat.f3147s = shortcutInfo.isCached();
            }
            shortcutInfoCompat.f3148t = shortcutInfo.isDynamic();
            shortcutInfoCompat.f3149u = shortcutInfo.isPinned();
            shortcutInfoCompat.f3150v = shortcutInfo.isDeclaredInManifest();
            shortcutInfoCompat.f3151w = shortcutInfo.isImmutable();
            shortcutInfoCompat.f3152x = shortcutInfo.isEnabled();
            shortcutInfoCompat.f3153y = shortcutInfo.hasKeyFieldsOnly();
            shortcutInfoCompat.f3141m = ShortcutInfoCompat.j(shortcutInfo);
            shortcutInfoCompat.f3143o = shortcutInfo.getRank();
            shortcutInfoCompat.f3144p = shortcutInfo.getExtras();
        }
    }
}
