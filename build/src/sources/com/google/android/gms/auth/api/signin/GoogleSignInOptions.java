package com.google.android.gms.auth.api.signin;

import android.accounts.Account;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import androidx.annotation.NonNull;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.ReflectedParcelable;
import ff.a;
import hf.q;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class GoogleSignInOptions extends jf.a implements a.d, ReflectedParcelable {
    public static final Scope B;
    public static final Scope C;
    @NonNull
    public static final Parcelable.Creator<GoogleSignInOptions> CREATOR;
    private static final Comparator D;

    /* renamed from: w  reason: collision with root package name */
    public static final GoogleSignInOptions f14383w;

    /* renamed from: x  reason: collision with root package name */
    public static final GoogleSignInOptions f14384x;

    /* renamed from: d  reason: collision with root package name */
    final int f14387d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayList f14388e;

    /* renamed from: i  reason: collision with root package name */
    private Account f14389i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f14390o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f14391p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f14392q;

    /* renamed from: r  reason: collision with root package name */
    private String f14393r;

    /* renamed from: s  reason: collision with root package name */
    private String f14394s;

    /* renamed from: t  reason: collision with root package name */
    private ArrayList f14395t;

    /* renamed from: u  reason: collision with root package name */
    private String f14396u;

    /* renamed from: v  reason: collision with root package name */
    private Map f14397v;

    /* renamed from: y  reason: collision with root package name */
    public static final Scope f14385y = new Scope("profile");

    /* renamed from: z  reason: collision with root package name */
    public static final Scope f14386z = new Scope("email");
    public static final Scope A = new Scope("openid");

    static {
        Scope scope = new Scope("https://www.googleapis.com/auth/games_lite");
        B = scope;
        C = new Scope("https://www.googleapis.com/auth/games");
        a aVar = new a();
        aVar.b();
        aVar.c();
        f14383w = aVar.a();
        a aVar2 = new a();
        aVar2.d(scope, new Scope[0]);
        f14384x = aVar2.a();
        CREATOR = new e();
        D = new d();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Map A(List list) {
        HashMap hashMap = new HashMap();
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                af.a aVar = (af.a) it.next();
                hashMap.put(Integer.valueOf(aVar.b()), aVar);
            }
        }
        return hashMap;
    }

    public static GoogleSignInOptions l(String str) {
        String str2;
        Account account;
        String str3;
        String str4 = null;
        if (TextUtils.isEmpty(str)) {
            return null;
        }
        JSONObject jSONObject = new JSONObject(str);
        HashSet hashSet = new HashSet();
        JSONArray jSONArray = jSONObject.getJSONArray("scopes");
        int length = jSONArray.length();
        for (int i10 = 0; i10 < length; i10++) {
            hashSet.add(new Scope(jSONArray.getString(i10)));
        }
        if (jSONObject.has("accountName")) {
            str2 = jSONObject.optString("accountName");
        } else {
            str2 = null;
        }
        if (!TextUtils.isEmpty(str2)) {
            account = new Account(str2, "com.google");
        } else {
            account = null;
        }
        ArrayList arrayList = new ArrayList(hashSet);
        boolean z10 = jSONObject.getBoolean("idTokenRequested");
        boolean z11 = jSONObject.getBoolean("serverAuthRequested");
        boolean z12 = jSONObject.getBoolean("forceCodeForRefreshToken");
        if (jSONObject.has("serverClientId")) {
            str3 = jSONObject.optString("serverClientId");
        } else {
            str3 = null;
        }
        if (jSONObject.has("hostedDomain")) {
            str4 = jSONObject.optString("hostedDomain");
        }
        return new GoogleSignInOptions(3, arrayList, account, z10, z11, z12, str3, str4, new HashMap(), (String) null);
    }

    public Account b() {
        return this.f14389i;
    }

    public ArrayList c() {
        return this.f14395t;
    }

    public String d() {
        return this.f14396u;
    }

    public ArrayList e() {
        return new ArrayList(this.f14388e);
    }

    /* JADX WARN: Code restructure failed: missing block: B:21:0x0048, code lost:
        if (r1.equals(r4.b()) != false) goto L21;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean equals(java.lang.Object r4) {
        /*
            r3 = this;
            r0 = 0
            if (r4 != 0) goto L4
            return r0
        L4:
            com.google.android.gms.auth.api.signin.GoogleSignInOptions r4 = (com.google.android.gms.auth.api.signin.GoogleSignInOptions) r4     // Catch: java.lang.ClassCastException -> L90
            java.util.ArrayList r1 = r3.f14395t     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = r1.isEmpty()     // Catch: java.lang.ClassCastException -> L90
            if (r1 == 0) goto L90
            java.util.ArrayList r1 = r4.f14395t     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = r1.isEmpty()     // Catch: java.lang.ClassCastException -> L90
            if (r1 != 0) goto L18
            goto L90
        L18:
            java.util.ArrayList r1 = r3.f14388e     // Catch: java.lang.ClassCastException -> L90
            int r1 = r1.size()     // Catch: java.lang.ClassCastException -> L90
            java.util.ArrayList r2 = r4.e()     // Catch: java.lang.ClassCastException -> L90
            int r2 = r2.size()     // Catch: java.lang.ClassCastException -> L90
            if (r1 != r2) goto L90
            java.util.ArrayList r1 = r3.f14388e     // Catch: java.lang.ClassCastException -> L90
            java.util.ArrayList r2 = r4.e()     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = r1.containsAll(r2)     // Catch: java.lang.ClassCastException -> L90
            if (r1 != 0) goto L35
            goto L90
        L35:
            android.accounts.Account r1 = r3.f14389i     // Catch: java.lang.ClassCastException -> L90
            if (r1 != 0) goto L40
            android.accounts.Account r1 = r4.b()     // Catch: java.lang.ClassCastException -> L90
            if (r1 != 0) goto L90
            goto L4a
        L40:
            android.accounts.Account r2 = r4.b()     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = r1.equals(r2)     // Catch: java.lang.ClassCastException -> L90
            if (r1 == 0) goto L90
        L4a:
            java.lang.String r1 = r3.f14393r     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = android.text.TextUtils.isEmpty(r1)     // Catch: java.lang.ClassCastException -> L90
            if (r1 == 0) goto L5d
            java.lang.String r1 = r4.f()     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = android.text.TextUtils.isEmpty(r1)     // Catch: java.lang.ClassCastException -> L90
            if (r1 == 0) goto L90
            goto L6a
        L5d:
            java.lang.String r1 = r3.f14393r     // Catch: java.lang.ClassCastException -> L90
            java.lang.String r2 = r4.f()     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = r1.equals(r2)     // Catch: java.lang.ClassCastException -> L90
            if (r1 != 0) goto L6a
            goto L90
        L6a:
            boolean r1 = r3.f14392q     // Catch: java.lang.ClassCastException -> L90
            boolean r2 = r4.g()     // Catch: java.lang.ClassCastException -> L90
            if (r1 != r2) goto L90
            boolean r1 = r3.f14390o     // Catch: java.lang.ClassCastException -> L90
            boolean r2 = r4.i()     // Catch: java.lang.ClassCastException -> L90
            if (r1 != r2) goto L90
            boolean r1 = r3.f14391p     // Catch: java.lang.ClassCastException -> L90
            boolean r2 = r4.j()     // Catch: java.lang.ClassCastException -> L90
            if (r1 != r2) goto L90
            java.lang.String r1 = r3.f14396u     // Catch: java.lang.ClassCastException -> L90
            java.lang.String r4 = r4.d()     // Catch: java.lang.ClassCastException -> L90
            boolean r4 = android.text.TextUtils.equals(r1, r4)     // Catch: java.lang.ClassCastException -> L90
            if (r4 == 0) goto L90
            r4 = 1
            return r4
        L90:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.auth.api.signin.GoogleSignInOptions.equals(java.lang.Object):boolean");
    }

    public String f() {
        return this.f14393r;
    }

    public boolean g() {
        return this.f14392q;
    }

    public int hashCode() {
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = this.f14388e;
        int size = arrayList2.size();
        for (int i10 = 0; i10 < size; i10++) {
            arrayList.add(((Scope) arrayList2.get(i10)).b());
        }
        Collections.sort(arrayList);
        af.b bVar = new af.b();
        bVar.a(arrayList);
        bVar.a(this.f14389i);
        bVar.a(this.f14393r);
        bVar.c(this.f14392q);
        bVar.c(this.f14390o);
        bVar.c(this.f14391p);
        bVar.a(this.f14396u);
        return bVar.b();
    }

    public boolean i() {
        return this.f14390o;
    }

    public boolean j() {
        return this.f14391p;
    }

    public final String r() {
        JSONObject jSONObject = new JSONObject();
        try {
            JSONArray jSONArray = new JSONArray();
            Collections.sort(this.f14388e, D);
            Iterator it = this.f14388e.iterator();
            while (it.hasNext()) {
                jSONArray.put(((Scope) it.next()).b());
            }
            jSONObject.put("scopes", jSONArray);
            Account account = this.f14389i;
            if (account != null) {
                jSONObject.put("accountName", account.name);
            }
            jSONObject.put("idTokenRequested", this.f14390o);
            jSONObject.put("forceCodeForRefreshToken", this.f14392q);
            jSONObject.put("serverAuthRequested", this.f14391p);
            if (!TextUtils.isEmpty(this.f14393r)) {
                jSONObject.put("serverClientId", this.f14393r);
            }
            if (!TextUtils.isEmpty(this.f14394s)) {
                jSONObject.put("hostedDomain", this.f14394s);
            }
            return jSONObject.toString();
        } catch (JSONException e10) {
            throw new RuntimeException(e10);
        }
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f14387d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, i11);
        jf.c.w(parcel, 2, e(), false);
        jf.c.q(parcel, 3, b(), i10, false);
        jf.c.c(parcel, 4, i());
        jf.c.c(parcel, 5, j());
        jf.c.c(parcel, 6, g());
        jf.c.s(parcel, 7, f(), false);
        jf.c.s(parcel, 8, this.f14394s, false);
        jf.c.w(parcel, 9, c(), false);
        jf.c.s(parcel, 10, d(), false);
        jf.c.b(parcel, a10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Set f14398a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f14399b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f14400c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f14401d;

        /* renamed from: e  reason: collision with root package name */
        private String f14402e;

        /* renamed from: f  reason: collision with root package name */
        private Account f14403f;

        /* renamed from: g  reason: collision with root package name */
        private String f14404g;

        /* renamed from: h  reason: collision with root package name */
        private Map f14405h;

        /* renamed from: i  reason: collision with root package name */
        private String f14406i;

        public a() {
            this.f14398a = new HashSet();
            this.f14405h = new HashMap();
        }

        public GoogleSignInOptions a() {
            if (this.f14398a.contains(GoogleSignInOptions.C)) {
                Set set = this.f14398a;
                Scope scope = GoogleSignInOptions.B;
                if (set.contains(scope)) {
                    this.f14398a.remove(scope);
                }
            }
            if (this.f14401d && (this.f14403f == null || !this.f14398a.isEmpty())) {
                b();
            }
            return new GoogleSignInOptions(new ArrayList(this.f14398a), this.f14403f, this.f14401d, this.f14399b, this.f14400c, this.f14402e, this.f14404g, this.f14405h, this.f14406i);
        }

        public a b() {
            this.f14398a.add(GoogleSignInOptions.A);
            return this;
        }

        public a c() {
            this.f14398a.add(GoogleSignInOptions.f14385y);
            return this;
        }

        public a d(Scope scope, Scope... scopeArr) {
            this.f14398a.add(scope);
            this.f14398a.addAll(Arrays.asList(scopeArr));
            return this;
        }

        public a e(String str) {
            this.f14406i = str;
            return this;
        }

        public a(GoogleSignInOptions googleSignInOptions) {
            this.f14398a = new HashSet();
            this.f14405h = new HashMap();
            q.l(googleSignInOptions);
            this.f14398a = new HashSet(googleSignInOptions.f14388e);
            this.f14399b = googleSignInOptions.f14391p;
            this.f14400c = googleSignInOptions.f14392q;
            this.f14401d = googleSignInOptions.f14390o;
            this.f14402e = googleSignInOptions.f14393r;
            this.f14403f = googleSignInOptions.f14389i;
            this.f14404g = googleSignInOptions.f14394s;
            this.f14405h = GoogleSignInOptions.A(googleSignInOptions.f14395t);
            this.f14406i = googleSignInOptions.f14396u;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public GoogleSignInOptions(int i10, ArrayList arrayList, Account account, boolean z10, boolean z11, boolean z12, String str, String str2, ArrayList arrayList2, String str3) {
        this(i10, arrayList, account, z10, z11, z12, str, str2, A(arrayList2), str3);
    }

    private GoogleSignInOptions(int i10, ArrayList arrayList, Account account, boolean z10, boolean z11, boolean z12, String str, String str2, Map map, String str3) {
        this.f14387d = i10;
        this.f14388e = arrayList;
        this.f14389i = account;
        this.f14390o = z10;
        this.f14391p = z11;
        this.f14392q = z12;
        this.f14393r = str;
        this.f14394s = str2;
        this.f14395t = new ArrayList(map.values());
        this.f14397v = map;
        this.f14396u = str3;
    }
}
