package gf;

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
    private final Account f25028a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f25029b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f25030c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f25031d;

    /* renamed from: e  reason: collision with root package name */
    private final int f25032e;

    /* renamed from: f  reason: collision with root package name */
    private final View f25033f;

    /* renamed from: g  reason: collision with root package name */
    private final String f25034g;

    /* renamed from: h  reason: collision with root package name */
    private final String f25035h;

    /* renamed from: i  reason: collision with root package name */
    private final vg.a f25036i;

    /* renamed from: j  reason: collision with root package name */
    private Integer f25037j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Account f25038a;

        /* renamed from: b  reason: collision with root package name */
        private u0.b f25039b;

        /* renamed from: c  reason: collision with root package name */
        private String f25040c;

        /* renamed from: d  reason: collision with root package name */
        private String f25041d;

        /* renamed from: e  reason: collision with root package name */
        private final vg.a f25042e = vg.a.f52649u;

        public d a() {
            return new d(this.f25038a, this.f25039b, null, 0, null, this.f25040c, this.f25041d, this.f25042e, false);
        }

        public a b(String str) {
            this.f25040c = str;
            return this;
        }

        public final a c(Collection collection) {
            if (this.f25039b == null) {
                this.f25039b = new u0.b();
            }
            this.f25039b.addAll(collection);
            return this;
        }

        public final a d(Account account) {
            this.f25038a = account;
            return this;
        }

        public final a e(String str) {
            this.f25041d = str;
            return this;
        }
    }

    public d(Account account, Set set, Map map, int i10, View view, String str, String str2, vg.a aVar, boolean z10) {
        Set unmodifiableSet;
        this.f25028a = account;
        if (set == null) {
            unmodifiableSet = Collections.EMPTY_SET;
        } else {
            unmodifiableSet = Collections.unmodifiableSet(set);
        }
        this.f25029b = unmodifiableSet;
        map = map == null ? Collections.EMPTY_MAP : map;
        this.f25031d = map;
        this.f25033f = view;
        this.f25032e = i10;
        this.f25034g = str;
        this.f25035h = str2;
        this.f25036i = aVar == null ? vg.a.f52649u : aVar;
        HashSet hashSet = new HashSet(unmodifiableSet);
        Iterator it = map.values().iterator();
        if (!it.hasNext()) {
            this.f25030c = Collections.unmodifiableSet(hashSet);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }

    public Account a() {
        return this.f25028a;
    }

    public String b() {
        Account account = this.f25028a;
        if (account != null) {
            return account.name;
        }
        return null;
    }

    public Account c() {
        Account account = this.f25028a;
        if (account != null) {
            return account;
        }
        return new Account("<<default account>>", "com.google");
    }

    public Set d() {
        return this.f25030c;
    }

    public Set e(ef.a aVar) {
        android.support.v4.media.session.b.a(this.f25031d.get(aVar));
        return this.f25029b;
    }

    public String f() {
        return this.f25034g;
    }

    public Set g() {
        return this.f25029b;
    }

    public final vg.a h() {
        return this.f25036i;
    }

    public final Integer i() {
        return this.f25037j;
    }

    public final String j() {
        return this.f25035h;
    }

    public final void k(Integer num) {
        this.f25037j = num;
    }
}
