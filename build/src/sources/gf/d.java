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
    private final Account f26770a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f26771b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f26772c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f26773d;

    /* renamed from: e  reason: collision with root package name */
    private final int f26774e;

    /* renamed from: f  reason: collision with root package name */
    private final View f26775f;

    /* renamed from: g  reason: collision with root package name */
    private final String f26776g;

    /* renamed from: h  reason: collision with root package name */
    private final String f26777h;

    /* renamed from: i  reason: collision with root package name */
    private final tg.a f26778i;

    /* renamed from: j  reason: collision with root package name */
    private Integer f26779j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Account f26780a;

        /* renamed from: b  reason: collision with root package name */
        private u0.b f26781b;

        /* renamed from: c  reason: collision with root package name */
        private String f26782c;

        /* renamed from: d  reason: collision with root package name */
        private String f26783d;

        /* renamed from: e  reason: collision with root package name */
        private final tg.a f26784e = tg.a.f49541u;

        public d a() {
            return new d(this.f26780a, this.f26781b, null, 0, null, this.f26782c, this.f26783d, this.f26784e, false);
        }

        public a b(String str) {
            this.f26782c = str;
            return this;
        }

        public final a c(Collection collection) {
            if (this.f26781b == null) {
                this.f26781b = new u0.b();
            }
            this.f26781b.addAll(collection);
            return this;
        }

        public final a d(Account account) {
            this.f26780a = account;
            return this;
        }

        public final a e(String str) {
            this.f26783d = str;
            return this;
        }
    }

    public d(Account account, Set set, Map map, int i10, View view, String str, String str2, tg.a aVar, boolean z10) {
        Set unmodifiableSet;
        this.f26770a = account;
        if (set == null) {
            unmodifiableSet = Collections.EMPTY_SET;
        } else {
            unmodifiableSet = Collections.unmodifiableSet(set);
        }
        this.f26771b = unmodifiableSet;
        map = map == null ? Collections.EMPTY_MAP : map;
        this.f26773d = map;
        this.f26775f = view;
        this.f26774e = i10;
        this.f26776g = str;
        this.f26777h = str2;
        this.f26778i = aVar == null ? tg.a.f49541u : aVar;
        HashSet hashSet = new HashSet(unmodifiableSet);
        Iterator it = map.values().iterator();
        if (!it.hasNext()) {
            this.f26772c = Collections.unmodifiableSet(hashSet);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }

    public Account a() {
        return this.f26770a;
    }

    public String b() {
        Account account = this.f26770a;
        if (account != null) {
            return account.name;
        }
        return null;
    }

    public Account c() {
        Account account = this.f26770a;
        if (account != null) {
            return account;
        }
        return new Account("<<default account>>", "com.google");
    }

    public Set d() {
        return this.f26772c;
    }

    public Set e(ef.a aVar) {
        android.support.v4.media.session.b.a(this.f26773d.get(aVar));
        return this.f26771b;
    }

    public String f() {
        return this.f26776g;
    }

    public Set g() {
        return this.f26771b;
    }

    public final tg.a h() {
        return this.f26778i;
    }

    public final Integer i() {
        return this.f26779j;
    }

    public final String j() {
        return this.f26777h;
    }

    public final void k(Integer num) {
        this.f26779j = num;
    }
}
