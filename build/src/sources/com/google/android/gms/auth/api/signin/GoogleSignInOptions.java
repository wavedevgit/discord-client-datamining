package com.google.android.gms.auth.api.signin;

import android.accounts.Account;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import androidx.annotation.NonNull;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.ReflectedParcelable;
import ef.a;
import gf.q;
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
public class GoogleSignInOptions extends hf.a implements a.d, ReflectedParcelable {
    public static final Scope B;
    public static final Scope C;
    @NonNull
    public static final Parcelable.Creator<GoogleSignInOptions> CREATOR;
    private static final Comparator D;

    /* renamed from: w  reason: collision with root package name */
    public static final GoogleSignInOptions f13704w;

    /* renamed from: x  reason: collision with root package name */
    public static final GoogleSignInOptions f13705x;

    /* renamed from: d  reason: collision with root package name */
    final int f13708d;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayList f13709e;

    /* renamed from: i  reason: collision with root package name */
    private Account f13710i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f13711o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f13712p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f13713q;

    /* renamed from: r  reason: collision with root package name */
    private String f13714r;

    /* renamed from: s  reason: collision with root package name */
    private String f13715s;

    /* renamed from: t  reason: collision with root package name */
    private ArrayList f13716t;

    /* renamed from: u  reason: collision with root package name */
    private String f13717u;

    /* renamed from: v  reason: collision with root package name */
    private Map f13718v;

    /* renamed from: y  reason: collision with root package name */
    public static final Scope f13706y = new Scope("profile");

    /* renamed from: z  reason: collision with root package name */
    public static final Scope f13707z = new Scope("email");
    public static final Scope A = new Scope("openid");

    static {
        Scope scope = new Scope("https://www.googleapis.com/auth/games_lite");
        B = scope;
        C = new Scope("https://www.googleapis.com/auth/games");
        a aVar = new a();
        aVar.b();
        aVar.c();
        f13704w = aVar.a();
        a aVar2 = new a();
        aVar2.d(scope, new Scope[0]);
        f13705x = aVar2.a();
        CREATOR = new e();
        D = new d();
    }

    public static GoogleSignInOptions n(String str) {
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

    /* JADX INFO: Access modifiers changed from: private */
    public static Map z(List list) {
        HashMap hashMap = new HashMap();
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                ze.a aVar = (ze.a) it.next();
                hashMap.put(Integer.valueOf(aVar.b()), aVar);
            }
        }
        return hashMap;
    }

    public Account b() {
        return this.f13710i;
    }

    public ArrayList c() {
        return this.f13716t;
    }

    public String d() {
        return this.f13717u;
    }

    public ArrayList e() {
        return new ArrayList(this.f13709e);
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
            java.util.ArrayList r1 = r3.f13716t     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = r1.isEmpty()     // Catch: java.lang.ClassCastException -> L90
            if (r1 == 0) goto L90
            java.util.ArrayList r1 = r4.f13716t     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = r1.isEmpty()     // Catch: java.lang.ClassCastException -> L90
            if (r1 != 0) goto L18
            goto L90
        L18:
            java.util.ArrayList r1 = r3.f13709e     // Catch: java.lang.ClassCastException -> L90
            int r1 = r1.size()     // Catch: java.lang.ClassCastException -> L90
            java.util.ArrayList r2 = r4.e()     // Catch: java.lang.ClassCastException -> L90
            int r2 = r2.size()     // Catch: java.lang.ClassCastException -> L90
            if (r1 != r2) goto L90
            java.util.ArrayList r1 = r3.f13709e     // Catch: java.lang.ClassCastException -> L90
            java.util.ArrayList r2 = r4.e()     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = r1.containsAll(r2)     // Catch: java.lang.ClassCastException -> L90
            if (r1 != 0) goto L35
            goto L90
        L35:
            android.accounts.Account r1 = r3.f13710i     // Catch: java.lang.ClassCastException -> L90
            if (r1 != 0) goto L40
            android.accounts.Account r1 = r4.b()     // Catch: java.lang.ClassCastException -> L90
            if (r1 != 0) goto L90
            goto L4a
        L40:
            android.accounts.Account r2 = r4.b()     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = r1.equals(r2)     // Catch: java.lang.ClassCastException -> L90
            if (r1 == 0) goto L90
        L4a:
            java.lang.String r1 = r3.f13714r     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = android.text.TextUtils.isEmpty(r1)     // Catch: java.lang.ClassCastException -> L90
            if (r1 == 0) goto L5d
            java.lang.String r1 = r4.f()     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = android.text.TextUtils.isEmpty(r1)     // Catch: java.lang.ClassCastException -> L90
            if (r1 == 0) goto L90
            goto L6a
        L5d:
            java.lang.String r1 = r3.f13714r     // Catch: java.lang.ClassCastException -> L90
            java.lang.String r2 = r4.f()     // Catch: java.lang.ClassCastException -> L90
            boolean r1 = r1.equals(r2)     // Catch: java.lang.ClassCastException -> L90
            if (r1 != 0) goto L6a
            goto L90
        L6a:
            boolean r1 = r3.f13713q     // Catch: java.lang.ClassCastException -> L90
            boolean r2 = r4.g()     // Catch: java.lang.ClassCastException -> L90
            if (r1 != r2) goto L90
            boolean r1 = r3.f13711o     // Catch: java.lang.ClassCastException -> L90
            boolean r2 = r4.i()     // Catch: java.lang.ClassCastException -> L90
            if (r1 != r2) goto L90
            boolean r1 = r3.f13712p     // Catch: java.lang.ClassCastException -> L90
            boolean r2 = r4.j()     // Catch: java.lang.ClassCastException -> L90
            if (r1 != r2) goto L90
            java.lang.String r1 = r3.f13717u     // Catch: java.lang.ClassCastException -> L90
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
        return this.f13714r;
    }

    public boolean g() {
        return this.f13713q;
    }

    public int hashCode() {
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = this.f13709e;
        int size = arrayList2.size();
        for (int i10 = 0; i10 < size; i10++) {
            arrayList.add(((Scope) arrayList2.get(i10)).b());
        }
        Collections.sort(arrayList);
        ze.b bVar = new ze.b();
        bVar.a(arrayList);
        bVar.a(this.f13710i);
        bVar.a(this.f13714r);
        bVar.c(this.f13713q);
        bVar.c(this.f13711o);
        bVar.c(this.f13712p);
        bVar.a(this.f13717u);
        return bVar.b();
    }

    public boolean i() {
        return this.f13711o;
    }

    public boolean j() {
        return this.f13712p;
    }

    public final String r() {
        JSONObject jSONObject = new JSONObject();
        try {
            JSONArray jSONArray = new JSONArray();
            Collections.sort(this.f13709e, D);
            Iterator it = this.f13709e.iterator();
            while (it.hasNext()) {
                jSONArray.put(((Scope) it.next()).b());
            }
            jSONObject.put("scopes", jSONArray);
            Account account = this.f13710i;
            if (account != null) {
                jSONObject.put("accountName", account.name);
            }
            jSONObject.put("idTokenRequested", this.f13711o);
            jSONObject.put("forceCodeForRefreshToken", this.f13713q);
            jSONObject.put("serverAuthRequested", this.f13712p);
            if (!TextUtils.isEmpty(this.f13714r)) {
                jSONObject.put("serverClientId", this.f13714r);
            }
            if (!TextUtils.isEmpty(this.f13715s)) {
                jSONObject.put("hostedDomain", this.f13715s);
            }
            return jSONObject.toString();
        } catch (JSONException e10) {
            throw new RuntimeException(e10);
        }
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f13708d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.w(parcel, 2, e(), false);
        hf.c.q(parcel, 3, b(), i10, false);
        hf.c.c(parcel, 4, i());
        hf.c.c(parcel, 5, j());
        hf.c.c(parcel, 6, g());
        hf.c.s(parcel, 7, f(), false);
        hf.c.s(parcel, 8, this.f13715s, false);
        hf.c.w(parcel, 9, c(), false);
        hf.c.s(parcel, 10, d(), false);
        hf.c.b(parcel, a10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Set f13719a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f13720b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f13721c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f13722d;

        /* renamed from: e  reason: collision with root package name */
        private String f13723e;

        /* renamed from: f  reason: collision with root package name */
        private Account f13724f;

        /* renamed from: g  reason: collision with root package name */
        private String f13725g;

        /* renamed from: h  reason: collision with root package name */
        private Map f13726h;

        /* renamed from: i  reason: collision with root package name */
        private String f13727i;

        public a() {
            this.f13719a = new HashSet();
            this.f13726h = new HashMap();
        }

        public GoogleSignInOptions a() {
            if (this.f13719a.contains(GoogleSignInOptions.C)) {
                Set set = this.f13719a;
                Scope scope = GoogleSignInOptions.B;
                if (set.contains(scope)) {
                    this.f13719a.remove(scope);
                }
            }
            if (this.f13722d && (this.f13724f == null || !this.f13719a.isEmpty())) {
                b();
            }
            return new GoogleSignInOptions(new ArrayList(this.f13719a), this.f13724f, this.f13722d, this.f13720b, this.f13721c, this.f13723e, this.f13725g, this.f13726h, this.f13727i);
        }

        public a b() {
            this.f13719a.add(GoogleSignInOptions.A);
            return this;
        }

        public a c() {
            this.f13719a.add(GoogleSignInOptions.f13706y);
            return this;
        }

        public a d(Scope scope, Scope... scopeArr) {
            this.f13719a.add(scope);
            this.f13719a.addAll(Arrays.asList(scopeArr));
            return this;
        }

        public a e(String str) {
            this.f13727i = str;
            return this;
        }

        public a(GoogleSignInOptions googleSignInOptions) {
            this.f13719a = new HashSet();
            this.f13726h = new HashMap();
            q.l(googleSignInOptions);
            this.f13719a = new HashSet(googleSignInOptions.f13709e);
            this.f13720b = googleSignInOptions.f13712p;
            this.f13721c = googleSignInOptions.f13713q;
            this.f13722d = googleSignInOptions.f13711o;
            this.f13723e = googleSignInOptions.f13714r;
            this.f13724f = googleSignInOptions.f13710i;
            this.f13725g = googleSignInOptions.f13715s;
            this.f13726h = GoogleSignInOptions.z(googleSignInOptions.f13716t);
            this.f13727i = googleSignInOptions.f13717u;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public GoogleSignInOptions(int i10, ArrayList arrayList, Account account, boolean z10, boolean z11, boolean z12, String str, String str2, ArrayList arrayList2, String str3) {
        this(i10, arrayList, account, z10, z11, z12, str, str2, z(arrayList2), str3);
    }

    private GoogleSignInOptions(int i10, ArrayList arrayList, Account account, boolean z10, boolean z11, boolean z12, String str, String str2, Map map, String str3) {
        this.f13708d = i10;
        this.f13709e = arrayList;
        this.f13710i = account;
        this.f13711o = z10;
        this.f13712p = z11;
        this.f13713q = z12;
        this.f13714r = str;
        this.f13715s = str2;
        this.f13716t = new ArrayList(map.values());
        this.f13718v = map;
        this.f13717u = str3;
    }
}
