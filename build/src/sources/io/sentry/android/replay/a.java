package io.sentry.android.replay;

import io.sentry.Breadcrumb;
import io.sentry.Hint;
import io.sentry.k7;
import io.sentry.t3;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.text.MatchResult;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements t3 {

    /* renamed from: d  reason: collision with root package name */
    public static final b f29301d = new b(null);

    /* renamed from: e  reason: collision with root package name */
    public static final int f29302e = 8;

    /* renamed from: f  reason: collision with root package name */
    private static final Lazy f29303f = lr.l.b(lr.o.f37121i, C0383a.f29308d);

    /* renamed from: g  reason: collision with root package name */
    private static final HashSet f29304g;

    /* renamed from: a  reason: collision with root package name */
    private k7 f29305a;

    /* renamed from: b  reason: collision with root package name */
    private String f29306b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f29307c;

    /* renamed from: io.sentry.android.replay.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0383a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0383a f29308d = new C0383a();

        C0383a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Regex invoke() {
            return new Regex("_[a-z]");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Regex b() {
            return (Regex) a.f29303f.getValue();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class c implements k7.a {

        /* renamed from: a  reason: collision with root package name */
        private final k7.a f29309a;

        public c(k7.a aVar) {
            this.f29309a = aVar;
        }

        private final io.sentry.util.network.a b(Breadcrumb breadcrumb, Hint hint) {
            if (!Intrinsics.areEqual(breadcrumb.u(), "http") && !Intrinsics.areEqual(breadcrumb.l(), "http")) {
                return null;
            }
            hint.c("sentry:replayNetworkDetails");
            return null;
        }

        @Override // io.sentry.k7.a
        public Breadcrumb a(Breadcrumb breadcrumb, Hint hint) {
            Intrinsics.checkNotNullParameter(breadcrumb, "breadcrumb");
            Intrinsics.checkNotNullParameter(hint, "hint");
            k7.a aVar = this.f29309a;
            if (aVar != null) {
                breadcrumb = aVar.a(breadcrumb, hint);
            }
            if (breadcrumb != null) {
                b(breadcrumb, hint);
            }
            return breadcrumb;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends LinkedHashMap {
        d() {
        }

        public /* bridge */ boolean a(Breadcrumb breadcrumb) {
            return super.containsKey(breadcrumb);
        }

        public /* bridge */ io.sentry.util.network.a b(Breadcrumb breadcrumb) {
            android.support.v4.media.session.b.a(super.get(breadcrumb));
            return null;
        }

        public /* bridge */ Set c() {
            return super.entrySet();
        }

        @Override // java.util.HashMap, java.util.AbstractMap, java.util.Map
        public final /* bridge */ boolean containsKey(Object obj) {
            if (!(obj instanceof Breadcrumb)) {
                return false;
            }
            return a((Breadcrumb) obj);
        }

        @Override // java.util.LinkedHashMap, java.util.HashMap, java.util.AbstractMap, java.util.Map
        public final /* bridge */ boolean containsValue(Object obj) {
            return false;
        }

        public /* bridge */ Set d() {
            return super.keySet();
        }

        public /* bridge */ io.sentry.util.network.a e(Breadcrumb breadcrumb, io.sentry.util.network.a aVar) {
            android.support.v4.media.session.b.a(super.getOrDefault(breadcrumb, aVar));
            return null;
        }

        @Override // java.util.LinkedHashMap, java.util.HashMap, java.util.AbstractMap, java.util.Map
        public final /* bridge */ Set entrySet() {
            return c();
        }

        public /* bridge */ int f() {
            return super.size();
        }

        public /* bridge */ Collection g() {
            return super.values();
        }

        @Override // java.util.LinkedHashMap, java.util.HashMap, java.util.AbstractMap, java.util.Map
        public final /* bridge */ /* synthetic */ Object get(Object obj) {
            if (!(obj instanceof Breadcrumb)) {
                return null;
            }
            b((Breadcrumb) obj);
            return null;
        }

        @Override // java.util.LinkedHashMap, java.util.HashMap, java.util.Map
        public final /* bridge */ /* synthetic */ Object getOrDefault(Object obj, Object obj2) {
            if (!(obj instanceof Breadcrumb)) {
                return obj2;
            }
            android.support.v4.media.session.b.a(obj2);
            e((Breadcrumb) obj, null);
            return null;
        }

        public /* bridge */ io.sentry.util.network.a i(Breadcrumb breadcrumb) {
            android.support.v4.media.session.b.a(super.remove(breadcrumb));
            return null;
        }

        @Override // java.util.LinkedHashMap, java.util.HashMap, java.util.AbstractMap, java.util.Map
        public final /* bridge */ Set keySet() {
            return d();
        }

        @Override // java.util.HashMap, java.util.Map
        public final /* bridge */ boolean remove(Object obj, Object obj2) {
            return false;
        }

        @Override // java.util.LinkedHashMap
        protected boolean removeEldestEntry(Map.Entry entry) {
            if (size() > 32) {
                return true;
            }
            return false;
        }

        @Override // java.util.HashMap, java.util.AbstractMap, java.util.Map
        public final /* bridge */ int size() {
            return f();
        }

        @Override // java.util.LinkedHashMap, java.util.HashMap, java.util.AbstractMap, java.util.Map
        public final /* bridge */ Collection values() {
            return g();
        }

        @Override // java.util.HashMap, java.util.AbstractMap, java.util.Map
        public final /* bridge */ /* synthetic */ Object remove(Object obj) {
            if (obj instanceof Breadcrumb) {
                i((Breadcrumb) obj);
                return null;
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final e f29311d = new e();

        e() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final CharSequence invoke(MatchResult it) {
            Intrinsics.checkNotNullParameter(it, "it");
            String upperCase = String.valueOf(StringsKt.t1(it.getValue())).toUpperCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
            return upperCase;
        }
    }

    static {
        HashSet hashSet = new HashSet();
        hashSet.add("status_code");
        hashSet.add("method");
        hashSet.add("response_content_length");
        hashSet.add("request_content_length");
        hashSet.add("http.response_content_length");
        hashSet.add("http.request_content_length");
        f29304g = hashSet;
    }

    public a() {
        this.f29307c = Collections.synchronizedMap(new d());
    }

    private final boolean c(Breadcrumb breadcrumb) {
        String str;
        Object obj = breadcrumb.p().get("url");
        if (obj instanceof String) {
            str = (String) obj;
        } else {
            str = null;
        }
        if (str != null && str.length() != 0) {
            Map p10 = breadcrumb.p();
            Intrinsics.checkNotNullExpressionValue(p10, "getData(...)");
            if (p10.containsKey("http.start_timestamp")) {
                Map p11 = breadcrumb.p();
                Intrinsics.checkNotNullExpressionValue(p11, "getData(...)");
                if (p11.containsKey("http.end_timestamp")) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    private final String d(String str) {
        return f29301d.b().j(str, e.f29311d);
    }

    private final io.sentry.rrweb.i e(Breadcrumb breadcrumb) {
        double longValue;
        double longValue2;
        Object obj = breadcrumb.p().get("http.start_timestamp");
        Object obj2 = breadcrumb.p().get("http.end_timestamp");
        io.sentry.rrweb.i iVar = new io.sentry.rrweb.i();
        iVar.f(breadcrumb.t().getTime());
        iVar.s("resource.http");
        Object obj3 = breadcrumb.p().get("url");
        Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type kotlin.String");
        iVar.q((String) obj3);
        if (obj instanceof Double) {
            longValue = ((Number) obj).doubleValue();
        } else {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Long");
            longValue = ((Long) obj).longValue();
        }
        iVar.u(longValue / 1000.0d);
        if (obj2 instanceof Double) {
            longValue2 = ((Number) obj2).doubleValue();
        } else {
            Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.Long");
            longValue2 = ((Long) obj2).longValue();
        }
        iVar.r(longValue2 / 1000.0d);
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        android.support.v4.media.session.b.a(this.f29307c.remove(breadcrumb));
        Map p10 = breadcrumb.p();
        Intrinsics.checkNotNullExpressionValue(p10, "getData(...)");
        for (Map.Entry entry : p10.entrySet()) {
            String str = (String) entry.getKey();
            Object value = entry.getValue();
            if (f29304g.contains(str)) {
                Intrinsics.checkNotNull(str);
                linkedHashMap.put(d(StringsKt.W0(StringsKt.J(str, "content_length", "body_size", false, 4, null), ".", null, 2, null)), value);
            }
        }
        iVar.o(linkedHashMap);
        return iVar;
    }

    /* JADX WARN: Removed duplicated region for block: B:43:0x00f0 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:44:0x00f1  */
    @Override // io.sentry.t3
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public io.sentry.rrweb.b a(io.sentry.Breadcrumb r10) {
        /*
            Method dump skipped, instructions count: 618
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.android.replay.a.a(io.sentry.Breadcrumb):io.sentry.rrweb.b");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public a(k7 options) {
        this();
        Intrinsics.checkNotNullParameter(options, "options");
        this.f29305a = options;
        if (options == null) {
            return;
        }
        options.setBeforeBreadcrumb(new c(options.getBeforeBreadcrumb()));
    }
}
