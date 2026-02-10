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
    private final Account f25987a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f25988b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f25989c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f25990d;

    /* renamed from: e  reason: collision with root package name */
    private final int f25991e;

    /* renamed from: f  reason: collision with root package name */
    private final View f25992f;

    /* renamed from: g  reason: collision with root package name */
    private final String f25993g;

    /* renamed from: h  reason: collision with root package name */
    private final String f25994h;

    /* renamed from: i  reason: collision with root package name */
    private final wg.a f25995i;

    /* renamed from: j  reason: collision with root package name */
    private Integer f25996j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Account f25997a;

        /* renamed from: b  reason: collision with root package name */
        private u0.b f25998b;

        /* renamed from: c  reason: collision with root package name */
        private String f25999c;

        /* renamed from: d  reason: collision with root package name */
        private String f26000d;

        /* renamed from: e  reason: collision with root package name */
        private final wg.a f26001e = wg.a.f53724u;

        public d a() {
            return new d(this.f25997a, this.f25998b, null, 0, null, this.f25999c, this.f26000d, this.f26001e, false);
        }

        public a b(String str) {
            this.f25999c = str;
            return this;
        }

        public final a c(Collection collection) {
            if (this.f25998b == null) {
                this.f25998b = new u0.b();
            }
            this.f25998b.addAll(collection);
            return this;
        }

        public final a d(Account account) {
            this.f25997a = account;
            return this;
        }

        public final a e(String str) {
            this.f26000d = str;
            return this;
        }
    }

    public d(Account account, Set set, Map map, int i10, View view, String str, String str2, wg.a aVar, boolean z10) {
        Set unmodifiableSet;
        this.f25987a = account;
        if (set == null) {
            unmodifiableSet = Collections.EMPTY_SET;
        } else {
            unmodifiableSet = Collections.unmodifiableSet(set);
        }
        this.f25988b = unmodifiableSet;
        map = map == null ? Collections.EMPTY_MAP : map;
        this.f25990d = map;
        this.f25992f = view;
        this.f25991e = i10;
        this.f25993g = str;
        this.f25994h = str2;
        this.f25995i = aVar == null ? wg.a.f53724u : aVar;
        HashSet hashSet = new HashSet(unmodifiableSet);
        Iterator it = map.values().iterator();
        if (!it.hasNext()) {
            this.f25989c = Collections.unmodifiableSet(hashSet);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }

    public Account a() {
        return this.f25987a;
    }

    public String b() {
        Account account = this.f25987a;
        if (account != null) {
            return account.name;
        }
        return null;
    }

    public Account c() {
        Account account = this.f25987a;
        if (account != null) {
            return account;
        }
        return new Account("<<default account>>", "com.google");
    }

    public Set d() {
        return this.f25989c;
    }

    public Set e(ff.a aVar) {
        android.support.v4.media.session.b.a(this.f25990d.get(aVar));
        return this.f25988b;
    }

    public String f() {
        return this.f25993g;
    }

    public Set g() {
        return this.f25988b;
    }

    public final wg.a h() {
        return this.f25995i;
    }

    public final Integer i() {
        return this.f25996j;
    }

    public final String j() {
        return this.f25994h;
    }

    public final void k(Integer num) {
        this.f25996j = num;
    }
}
