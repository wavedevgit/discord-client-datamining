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
    private final Account f27205a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f27206b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f27207c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f27208d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27209e;

    /* renamed from: f  reason: collision with root package name */
    private final View f27210f;

    /* renamed from: g  reason: collision with root package name */
    private final String f27211g;

    /* renamed from: h  reason: collision with root package name */
    private final String f27212h;

    /* renamed from: i  reason: collision with root package name */
    private final wg.a f27213i;

    /* renamed from: j  reason: collision with root package name */
    private Integer f27214j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Account f27215a;

        /* renamed from: b  reason: collision with root package name */
        private u0.b f27216b;

        /* renamed from: c  reason: collision with root package name */
        private String f27217c;

        /* renamed from: d  reason: collision with root package name */
        private String f27218d;

        /* renamed from: e  reason: collision with root package name */
        private final wg.a f27219e = wg.a.f52753u;

        public d a() {
            return new d(this.f27215a, this.f27216b, null, 0, null, this.f27217c, this.f27218d, this.f27219e, false);
        }

        public a b(String str) {
            this.f27217c = str;
            return this;
        }

        public final a c(Collection collection) {
            if (this.f27216b == null) {
                this.f27216b = new u0.b();
            }
            this.f27216b.addAll(collection);
            return this;
        }

        public final a d(Account account) {
            this.f27215a = account;
            return this;
        }

        public final a e(String str) {
            this.f27218d = str;
            return this;
        }
    }

    public d(Account account, Set set, Map map, int i10, View view, String str, String str2, wg.a aVar, boolean z10) {
        Set unmodifiableSet;
        this.f27205a = account;
        if (set == null) {
            unmodifiableSet = Collections.EMPTY_SET;
        } else {
            unmodifiableSet = Collections.unmodifiableSet(set);
        }
        this.f27206b = unmodifiableSet;
        map = map == null ? Collections.EMPTY_MAP : map;
        this.f27208d = map;
        this.f27210f = view;
        this.f27209e = i10;
        this.f27211g = str;
        this.f27212h = str2;
        this.f27213i = aVar == null ? wg.a.f52753u : aVar;
        HashSet hashSet = new HashSet(unmodifiableSet);
        Iterator it = map.values().iterator();
        if (!it.hasNext()) {
            this.f27207c = Collections.unmodifiableSet(hashSet);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }

    public Account a() {
        return this.f27205a;
    }

    public String b() {
        Account account = this.f27205a;
        if (account != null) {
            return account.name;
        }
        return null;
    }

    public Account c() {
        Account account = this.f27205a;
        if (account != null) {
            return account;
        }
        return new Account("<<default account>>", "com.google");
    }

    public Set d() {
        return this.f27207c;
    }

    public Set e(ff.a aVar) {
        android.support.v4.media.session.b.a(this.f27208d.get(aVar));
        return this.f27206b;
    }

    public String f() {
        return this.f27211g;
    }

    public Set g() {
        return this.f27206b;
    }

    public final wg.a h() {
        return this.f27213i;
    }

    public final Integer i() {
        return this.f27214j;
    }

    public final String j() {
        return this.f27212h;
    }

    public final void k(Integer num) {
        this.f27214j = num;
    }
}
