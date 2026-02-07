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
    private final Account f25076a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f25077b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f25078c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f25079d;

    /* renamed from: e  reason: collision with root package name */
    private final int f25080e;

    /* renamed from: f  reason: collision with root package name */
    private final View f25081f;

    /* renamed from: g  reason: collision with root package name */
    private final String f25082g;

    /* renamed from: h  reason: collision with root package name */
    private final String f25083h;

    /* renamed from: i  reason: collision with root package name */
    private final vg.a f25084i;

    /* renamed from: j  reason: collision with root package name */
    private Integer f25085j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Account f25086a;

        /* renamed from: b  reason: collision with root package name */
        private u0.b f25087b;

        /* renamed from: c  reason: collision with root package name */
        private String f25088c;

        /* renamed from: d  reason: collision with root package name */
        private String f25089d;

        /* renamed from: e  reason: collision with root package name */
        private final vg.a f25090e = vg.a.f52697u;

        public d a() {
            return new d(this.f25086a, this.f25087b, null, 0, null, this.f25088c, this.f25089d, this.f25090e, false);
        }

        public a b(String str) {
            this.f25088c = str;
            return this;
        }

        public final a c(Collection collection) {
            if (this.f25087b == null) {
                this.f25087b = new u0.b();
            }
            this.f25087b.addAll(collection);
            return this;
        }

        public final a d(Account account) {
            this.f25086a = account;
            return this;
        }

        public final a e(String str) {
            this.f25089d = str;
            return this;
        }
    }

    public d(Account account, Set set, Map map, int i10, View view, String str, String str2, vg.a aVar, boolean z10) {
        Set unmodifiableSet;
        this.f25076a = account;
        if (set == null) {
            unmodifiableSet = Collections.EMPTY_SET;
        } else {
            unmodifiableSet = Collections.unmodifiableSet(set);
        }
        this.f25077b = unmodifiableSet;
        map = map == null ? Collections.EMPTY_MAP : map;
        this.f25079d = map;
        this.f25081f = view;
        this.f25080e = i10;
        this.f25082g = str;
        this.f25083h = str2;
        this.f25084i = aVar == null ? vg.a.f52697u : aVar;
        HashSet hashSet = new HashSet(unmodifiableSet);
        Iterator it = map.values().iterator();
        if (!it.hasNext()) {
            this.f25078c = Collections.unmodifiableSet(hashSet);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }

    public Account a() {
        return this.f25076a;
    }

    public String b() {
        Account account = this.f25076a;
        if (account != null) {
            return account.name;
        }
        return null;
    }

    public Account c() {
        Account account = this.f25076a;
        if (account != null) {
            return account;
        }
        return new Account("<<default account>>", "com.google");
    }

    public Set d() {
        return this.f25078c;
    }

    public Set e(ef.a aVar) {
        android.support.v4.media.session.b.a(this.f25079d.get(aVar));
        return this.f25077b;
    }

    public String f() {
        return this.f25082g;
    }

    public Set g() {
        return this.f25077b;
    }

    public final vg.a h() {
        return this.f25084i;
    }

    public final Integer i() {
        return this.f25085j;
    }

    public final String j() {
        return this.f25083h;
    }

    public final void k(Integer num) {
        this.f25085j = num;
    }
}
