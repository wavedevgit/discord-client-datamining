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
    private final Account f26078a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f26079b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f26080c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f26081d;

    /* renamed from: e  reason: collision with root package name */
    private final int f26082e;

    /* renamed from: f  reason: collision with root package name */
    private final View f26083f;

    /* renamed from: g  reason: collision with root package name */
    private final String f26084g;

    /* renamed from: h  reason: collision with root package name */
    private final String f26085h;

    /* renamed from: i  reason: collision with root package name */
    private final tg.a f26086i;

    /* renamed from: j  reason: collision with root package name */
    private Integer f26087j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Account f26088a;

        /* renamed from: b  reason: collision with root package name */
        private u0.b f26089b;

        /* renamed from: c  reason: collision with root package name */
        private String f26090c;

        /* renamed from: d  reason: collision with root package name */
        private String f26091d;

        /* renamed from: e  reason: collision with root package name */
        private final tg.a f26092e = tg.a.f50021u;

        public d a() {
            return new d(this.f26088a, this.f26089b, null, 0, null, this.f26090c, this.f26091d, this.f26092e, false);
        }

        public a b(String str) {
            this.f26090c = str;
            return this;
        }

        public final a c(Collection collection) {
            if (this.f26089b == null) {
                this.f26089b = new u0.b();
            }
            this.f26089b.addAll(collection);
            return this;
        }

        public final a d(Account account) {
            this.f26088a = account;
            return this;
        }

        public final a e(String str) {
            this.f26091d = str;
            return this;
        }
    }

    public d(Account account, Set set, Map map, int i10, View view, String str, String str2, tg.a aVar, boolean z10) {
        Set unmodifiableSet;
        this.f26078a = account;
        if (set == null) {
            unmodifiableSet = Collections.EMPTY_SET;
        } else {
            unmodifiableSet = Collections.unmodifiableSet(set);
        }
        this.f26079b = unmodifiableSet;
        map = map == null ? Collections.EMPTY_MAP : map;
        this.f26081d = map;
        this.f26083f = view;
        this.f26082e = i10;
        this.f26084g = str;
        this.f26085h = str2;
        this.f26086i = aVar == null ? tg.a.f50021u : aVar;
        HashSet hashSet = new HashSet(unmodifiableSet);
        Iterator it = map.values().iterator();
        if (!it.hasNext()) {
            this.f26080c = Collections.unmodifiableSet(hashSet);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }

    public Account a() {
        return this.f26078a;
    }

    public String b() {
        Account account = this.f26078a;
        if (account != null) {
            return account.name;
        }
        return null;
    }

    public Account c() {
        Account account = this.f26078a;
        if (account != null) {
            return account;
        }
        return new Account("<<default account>>", "com.google");
    }

    public Set d() {
        return this.f26080c;
    }

    public Set e(ef.a aVar) {
        android.support.v4.media.session.b.a(this.f26081d.get(aVar));
        return this.f26079b;
    }

    public String f() {
        return this.f26084g;
    }

    public Set g() {
        return this.f26079b;
    }

    public final tg.a h() {
        return this.f26086i;
    }

    public final Integer i() {
        return this.f26087j;
    }

    public final String j() {
        return this.f26085h;
    }

    public final void k(Integer num) {
        this.f26087j = num;
    }
}
