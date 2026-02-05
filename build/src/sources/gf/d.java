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
    private final Account f24775a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f24776b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f24777c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f24778d;

    /* renamed from: e  reason: collision with root package name */
    private final int f24779e;

    /* renamed from: f  reason: collision with root package name */
    private final View f24780f;

    /* renamed from: g  reason: collision with root package name */
    private final String f24781g;

    /* renamed from: h  reason: collision with root package name */
    private final String f24782h;

    /* renamed from: i  reason: collision with root package name */
    private final ug.a f24783i;

    /* renamed from: j  reason: collision with root package name */
    private Integer f24784j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Account f24785a;

        /* renamed from: b  reason: collision with root package name */
        private u0.b f24786b;

        /* renamed from: c  reason: collision with root package name */
        private String f24787c;

        /* renamed from: d  reason: collision with root package name */
        private String f24788d;

        /* renamed from: e  reason: collision with root package name */
        private final ug.a f24789e = ug.a.f51393u;

        public d a() {
            return new d(this.f24785a, this.f24786b, null, 0, null, this.f24787c, this.f24788d, this.f24789e, false);
        }

        public a b(String str) {
            this.f24787c = str;
            return this;
        }

        public final a c(Collection collection) {
            if (this.f24786b == null) {
                this.f24786b = new u0.b();
            }
            this.f24786b.addAll(collection);
            return this;
        }

        public final a d(Account account) {
            this.f24785a = account;
            return this;
        }

        public final a e(String str) {
            this.f24788d = str;
            return this;
        }
    }

    public d(Account account, Set set, Map map, int i10, View view, String str, String str2, ug.a aVar, boolean z10) {
        Set unmodifiableSet;
        this.f24775a = account;
        if (set == null) {
            unmodifiableSet = Collections.EMPTY_SET;
        } else {
            unmodifiableSet = Collections.unmodifiableSet(set);
        }
        this.f24776b = unmodifiableSet;
        map = map == null ? Collections.EMPTY_MAP : map;
        this.f24778d = map;
        this.f24780f = view;
        this.f24779e = i10;
        this.f24781g = str;
        this.f24782h = str2;
        this.f24783i = aVar == null ? ug.a.f51393u : aVar;
        HashSet hashSet = new HashSet(unmodifiableSet);
        Iterator it = map.values().iterator();
        if (!it.hasNext()) {
            this.f24777c = Collections.unmodifiableSet(hashSet);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }

    public Account a() {
        return this.f24775a;
    }

    public String b() {
        Account account = this.f24775a;
        if (account != null) {
            return account.name;
        }
        return null;
    }

    public Account c() {
        Account account = this.f24775a;
        if (account != null) {
            return account;
        }
        return new Account("<<default account>>", "com.google");
    }

    public Set d() {
        return this.f24777c;
    }

    public Set e(ef.a aVar) {
        android.support.v4.media.session.b.a(this.f24778d.get(aVar));
        return this.f24776b;
    }

    public String f() {
        return this.f24781g;
    }

    public Set g() {
        return this.f24776b;
    }

    public final ug.a h() {
        return this.f24783i;
    }

    public final Integer i() {
        return this.f24784j;
    }

    public final String j() {
        return this.f24782h;
    }

    public final void k(Integer num) {
        this.f24784j = num;
    }
}
