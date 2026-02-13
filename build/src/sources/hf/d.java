package hf;

import android.accounts.Account;
import android.view.View;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final Account f27774a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f27775b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f27776c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f27777d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27778e;

    /* renamed from: f  reason: collision with root package name */
    private final View f27779f;

    /* renamed from: g  reason: collision with root package name */
    private final String f27780g;

    /* renamed from: h  reason: collision with root package name */
    private final String f27781h;

    /* renamed from: i  reason: collision with root package name */
    private final wg.a f27782i;

    /* renamed from: j  reason: collision with root package name */
    private Integer f27783j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Account f27784a;

        /* renamed from: b  reason: collision with root package name */
        private u0.b f27785b;

        /* renamed from: c  reason: collision with root package name */
        private String f27786c;

        /* renamed from: d  reason: collision with root package name */
        private String f27787d;

        /* renamed from: e  reason: collision with root package name */
        private final wg.a f27788e = wg.a.f53322u;

        public d a() {
            return new d(this.f27784a, this.f27785b, null, 0, null, this.f27786c, this.f27787d, this.f27788e, false);
        }

        public a b(String str) {
            this.f27786c = str;
            return this;
        }

        public final a c(Collection collection) {
            if (this.f27785b == null) {
                this.f27785b = new u0.b();
            }
            this.f27785b.addAll(collection);
            return this;
        }

        public final a d(Account account) {
            this.f27784a = account;
            return this;
        }

        public final a e(String str) {
            this.f27787d = str;
            return this;
        }
    }

    public d(Account account, Set set, Map map, int i10, View view, String str, String str2, wg.a aVar, boolean z10) {
        Set unmodifiableSet;
        this.f27774a = account;
        if (set == null) {
            unmodifiableSet = Collections.EMPTY_SET;
        } else {
            unmodifiableSet = Collections.unmodifiableSet(set);
        }
        this.f27775b = unmodifiableSet;
        map = map == null ? Collections.EMPTY_MAP : map;
        this.f27777d = map;
        this.f27779f = view;
        this.f27778e = i10;
        this.f27780g = str;
        this.f27781h = str2;
        this.f27782i = aVar == null ? wg.a.f53322u : aVar;
        HashSet hashSet = new HashSet(unmodifiableSet);
        Iterator it = map.values().iterator();
        if (!it.hasNext()) {
            this.f27776c = Collections.unmodifiableSet(hashSet);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }

    public Account a() {
        return this.f27774a;
    }

    public String b() {
        Account account = this.f27774a;
        if (account != null) {
            return account.name;
        }
        return null;
    }

    public Account c() {
        Account account = this.f27774a;
        if (account != null) {
            return account;
        }
        return new Account("<<default account>>", "com.google");
    }

    public Set d() {
        return this.f27776c;
    }

    public Set e(ff.a aVar) {
        android.support.v4.media.session.b.a(this.f27777d.get(aVar));
        return this.f27775b;
    }

    public String f() {
        return this.f27780g;
    }

    public Set g() {
        return this.f27775b;
    }

    public final wg.a h() {
        return this.f27782i;
    }

    public final Integer i() {
        return this.f27783j;
    }

    public final String j() {
        return this.f27781h;
    }

    public final void k(Integer num) {
        this.f27783j = num;
    }
}
