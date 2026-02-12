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
    private final Account f27206a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f27207b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f27208c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f27209d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27210e;

    /* renamed from: f  reason: collision with root package name */
    private final View f27211f;

    /* renamed from: g  reason: collision with root package name */
    private final String f27212g;

    /* renamed from: h  reason: collision with root package name */
    private final String f27213h;

    /* renamed from: i  reason: collision with root package name */
    private final wg.a f27214i;

    /* renamed from: j  reason: collision with root package name */
    private Integer f27215j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Account f27216a;

        /* renamed from: b  reason: collision with root package name */
        private u0.b f27217b;

        /* renamed from: c  reason: collision with root package name */
        private String f27218c;

        /* renamed from: d  reason: collision with root package name */
        private String f27219d;

        /* renamed from: e  reason: collision with root package name */
        private final wg.a f27220e = wg.a.f52754u;

        public d a() {
            return new d(this.f27216a, this.f27217b, null, 0, null, this.f27218c, this.f27219d, this.f27220e, false);
        }

        public a b(String str) {
            this.f27218c = str;
            return this;
        }

        public final a c(Collection collection) {
            if (this.f27217b == null) {
                this.f27217b = new u0.b();
            }
            this.f27217b.addAll(collection);
            return this;
        }

        public final a d(Account account) {
            this.f27216a = account;
            return this;
        }

        public final a e(String str) {
            this.f27219d = str;
            return this;
        }
    }

    public d(Account account, Set set, Map map, int i10, View view, String str, String str2, wg.a aVar, boolean z10) {
        Set unmodifiableSet;
        this.f27206a = account;
        if (set == null) {
            unmodifiableSet = Collections.EMPTY_SET;
        } else {
            unmodifiableSet = Collections.unmodifiableSet(set);
        }
        this.f27207b = unmodifiableSet;
        map = map == null ? Collections.EMPTY_MAP : map;
        this.f27209d = map;
        this.f27211f = view;
        this.f27210e = i10;
        this.f27212g = str;
        this.f27213h = str2;
        this.f27214i = aVar == null ? wg.a.f52754u : aVar;
        HashSet hashSet = new HashSet(unmodifiableSet);
        Iterator it = map.values().iterator();
        if (!it.hasNext()) {
            this.f27208c = Collections.unmodifiableSet(hashSet);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }

    public Account a() {
        return this.f27206a;
    }

    public String b() {
        Account account = this.f27206a;
        if (account != null) {
            return account.name;
        }
        return null;
    }

    public Account c() {
        Account account = this.f27206a;
        if (account != null) {
            return account;
        }
        return new Account("<<default account>>", "com.google");
    }

    public Set d() {
        return this.f27208c;
    }

    public Set e(ff.a aVar) {
        android.support.v4.media.session.b.a(this.f27209d.get(aVar));
        return this.f27207b;
    }

    public String f() {
        return this.f27212g;
    }

    public Set g() {
        return this.f27207b;
    }

    public final wg.a h() {
        return this.f27214i;
    }

    public final Integer i() {
        return this.f27215j;
    }

    public final String j() {
        return this.f27213h;
    }

    public final void k(Integer num) {
        this.f27215j = num;
    }
}
