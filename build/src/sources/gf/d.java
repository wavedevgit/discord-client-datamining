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
    private final Account f26754a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f26755b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f26756c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f26757d;

    /* renamed from: e  reason: collision with root package name */
    private final int f26758e;

    /* renamed from: f  reason: collision with root package name */
    private final View f26759f;

    /* renamed from: g  reason: collision with root package name */
    private final String f26760g;

    /* renamed from: h  reason: collision with root package name */
    private final String f26761h;

    /* renamed from: i  reason: collision with root package name */
    private final tg.a f26762i;

    /* renamed from: j  reason: collision with root package name */
    private Integer f26763j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Account f26764a;

        /* renamed from: b  reason: collision with root package name */
        private u0.b f26765b;

        /* renamed from: c  reason: collision with root package name */
        private String f26766c;

        /* renamed from: d  reason: collision with root package name */
        private String f26767d;

        /* renamed from: e  reason: collision with root package name */
        private final tg.a f26768e = tg.a.f49525u;

        public d a() {
            return new d(this.f26764a, this.f26765b, null, 0, null, this.f26766c, this.f26767d, this.f26768e, false);
        }

        public a b(String str) {
            this.f26766c = str;
            return this;
        }

        public final a c(Collection collection) {
            if (this.f26765b == null) {
                this.f26765b = new u0.b();
            }
            this.f26765b.addAll(collection);
            return this;
        }

        public final a d(Account account) {
            this.f26764a = account;
            return this;
        }

        public final a e(String str) {
            this.f26767d = str;
            return this;
        }
    }

    public d(Account account, Set set, Map map, int i10, View view, String str, String str2, tg.a aVar, boolean z10) {
        Set unmodifiableSet;
        this.f26754a = account;
        if (set == null) {
            unmodifiableSet = Collections.EMPTY_SET;
        } else {
            unmodifiableSet = Collections.unmodifiableSet(set);
        }
        this.f26755b = unmodifiableSet;
        map = map == null ? Collections.EMPTY_MAP : map;
        this.f26757d = map;
        this.f26759f = view;
        this.f26758e = i10;
        this.f26760g = str;
        this.f26761h = str2;
        this.f26762i = aVar == null ? tg.a.f49525u : aVar;
        HashSet hashSet = new HashSet(unmodifiableSet);
        Iterator it = map.values().iterator();
        if (!it.hasNext()) {
            this.f26756c = Collections.unmodifiableSet(hashSet);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }

    public Account a() {
        return this.f26754a;
    }

    public String b() {
        Account account = this.f26754a;
        if (account != null) {
            return account.name;
        }
        return null;
    }

    public Account c() {
        Account account = this.f26754a;
        if (account != null) {
            return account;
        }
        return new Account("<<default account>>", "com.google");
    }

    public Set d() {
        return this.f26756c;
    }

    public Set e(ef.a aVar) {
        android.support.v4.media.session.b.a(this.f26757d.get(aVar));
        return this.f26755b;
    }

    public String f() {
        return this.f26760g;
    }

    public Set g() {
        return this.f26755b;
    }

    public final tg.a h() {
        return this.f26762i;
    }

    public final Integer i() {
        return this.f26763j;
    }

    public final String j() {
        return this.f26761h;
    }

    public final void k(Integer num) {
        this.f26763j = num;
    }
}
