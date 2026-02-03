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
    private final Account f26865a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f26866b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f26867c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f26868d;

    /* renamed from: e  reason: collision with root package name */
    private final int f26869e;

    /* renamed from: f  reason: collision with root package name */
    private final View f26870f;

    /* renamed from: g  reason: collision with root package name */
    private final String f26871g;

    /* renamed from: h  reason: collision with root package name */
    private final String f26872h;

    /* renamed from: i  reason: collision with root package name */
    private final tg.a f26873i;

    /* renamed from: j  reason: collision with root package name */
    private Integer f26874j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Account f26875a;

        /* renamed from: b  reason: collision with root package name */
        private u0.b f26876b;

        /* renamed from: c  reason: collision with root package name */
        private String f26877c;

        /* renamed from: d  reason: collision with root package name */
        private String f26878d;

        /* renamed from: e  reason: collision with root package name */
        private final tg.a f26879e = tg.a.f49813u;

        public d a() {
            return new d(this.f26875a, this.f26876b, null, 0, null, this.f26877c, this.f26878d, this.f26879e, false);
        }

        public a b(String str) {
            this.f26877c = str;
            return this;
        }

        public final a c(Collection collection) {
            if (this.f26876b == null) {
                this.f26876b = new u0.b();
            }
            this.f26876b.addAll(collection);
            return this;
        }

        public final a d(Account account) {
            this.f26875a = account;
            return this;
        }

        public final a e(String str) {
            this.f26878d = str;
            return this;
        }
    }

    public d(Account account, Set set, Map map, int i10, View view, String str, String str2, tg.a aVar, boolean z10) {
        Set unmodifiableSet;
        this.f26865a = account;
        if (set == null) {
            unmodifiableSet = Collections.EMPTY_SET;
        } else {
            unmodifiableSet = Collections.unmodifiableSet(set);
        }
        this.f26866b = unmodifiableSet;
        map = map == null ? Collections.EMPTY_MAP : map;
        this.f26868d = map;
        this.f26870f = view;
        this.f26869e = i10;
        this.f26871g = str;
        this.f26872h = str2;
        this.f26873i = aVar == null ? tg.a.f49813u : aVar;
        HashSet hashSet = new HashSet(unmodifiableSet);
        Iterator it = map.values().iterator();
        if (!it.hasNext()) {
            this.f26867c = Collections.unmodifiableSet(hashSet);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }

    public Account a() {
        return this.f26865a;
    }

    public String b() {
        Account account = this.f26865a;
        if (account != null) {
            return account.name;
        }
        return null;
    }

    public Account c() {
        Account account = this.f26865a;
        if (account != null) {
            return account;
        }
        return new Account("<<default account>>", "com.google");
    }

    public Set d() {
        return this.f26867c;
    }

    public Set e(ef.a aVar) {
        android.support.v4.media.session.b.a(this.f26868d.get(aVar));
        return this.f26866b;
    }

    public String f() {
        return this.f26871g;
    }

    public Set g() {
        return this.f26866b;
    }

    public final tg.a h() {
        return this.f26873i;
    }

    public final Integer i() {
        return this.f26874j;
    }

    public final String j() {
        return this.f26872h;
    }

    public final void k(Integer num) {
        this.f26874j = num;
    }
}
