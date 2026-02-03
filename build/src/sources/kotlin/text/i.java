package kotlin.text;

import java.util.Iterator;
import java.util.List;
import java.util.regex.Matcher;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
import kotlin.text.MatchResult;
import kotlin.text.i;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements MatchResult {

    /* renamed from: a  reason: collision with root package name */
    private final Matcher f35437a;

    /* renamed from: b  reason: collision with root package name */
    private final CharSequence f35438b;

    /* renamed from: c  reason: collision with root package name */
    private final h f35439c;

    /* renamed from: d  reason: collision with root package name */
    private List f35440d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.collections.d {
        a() {
        }

        @Override // kotlin.collections.b
        public int c() {
            return i.this.f().groupCount() + 1;
        }

        @Override // kotlin.collections.b, java.util.Collection
        public final /* bridge */ boolean contains(Object obj) {
            if (!(obj instanceof String)) {
                return false;
            }
            return e((String) obj);
        }

        public /* bridge */ boolean e(String str) {
            return super.contains(str);
        }

        @Override // kotlin.collections.d, java.util.List
        /* renamed from: f */
        public String get(int i10) {
            String group = i.this.f().group(i10);
            if (group == null) {
                return "";
            }
            return group;
        }

        public /* bridge */ int g(String str) {
            return super.indexOf(str);
        }

        public /* bridge */ int h(String str) {
            return super.lastIndexOf(str);
        }

        @Override // kotlin.collections.d, java.util.List
        public final /* bridge */ int indexOf(Object obj) {
            if (!(obj instanceof String)) {
                return -1;
            }
            return g((String) obj);
        }

        @Override // kotlin.collections.d, java.util.List
        public final /* bridge */ int lastIndexOf(Object obj) {
            if (!(obj instanceof String)) {
                return -1;
            }
            return h((String) obj);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.collections.b implements h {
        b() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final MatchGroup g(b bVar, int i10) {
            return bVar.get(i10);
        }

        @Override // kotlin.collections.b
        public int c() {
            return i.this.f().groupCount() + 1;
        }

        @Override // kotlin.collections.b, java.util.Collection
        public final /* bridge */ boolean contains(Object obj) {
            boolean z10;
            if (obj == null) {
                z10 = true;
            } else {
                z10 = obj instanceof MatchGroup;
            }
            if (!z10) {
                return false;
            }
            return f((MatchGroup) obj);
        }

        public /* bridge */ boolean f(MatchGroup matchGroup) {
            return super.contains(matchGroup);
        }

        @Override // kotlin.text.h
        public MatchGroup get(int i10) {
            IntRange i11;
            i11 = l.i(i.this.f(), i10);
            if (i11.b().intValue() >= 0) {
                String group = i.this.f().group(i10);
                Intrinsics.checkNotNullExpressionValue(group, "group(...)");
                return new MatchGroup(group, i11);
            }
            return null;
        }

        @Override // kotlin.collections.b, java.util.Collection
        public boolean isEmpty() {
            return false;
        }

        @Override // java.util.Collection, java.lang.Iterable
        public Iterator iterator() {
            return kotlin.sequences.k.R(CollectionsKt.b0(CollectionsKt.m(this)), new Function1() { // from class: kotlin.text.j
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    MatchGroup g10;
                    g10 = i.b.g(i.b.this, ((Integer) obj).intValue());
                    return g10;
                }
            }).iterator();
        }
    }

    public i(Matcher matcher, CharSequence input) {
        Intrinsics.checkNotNullParameter(matcher, "matcher");
        Intrinsics.checkNotNullParameter(input, "input");
        this.f35437a = matcher;
        this.f35438b = input;
        this.f35439c = new b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final java.util.regex.MatchResult f() {
        return this.f35437a;
    }

    @Override // kotlin.text.MatchResult
    public MatchResult.b a() {
        return MatchResult.a.a(this);
    }

    @Override // kotlin.text.MatchResult
    public List b() {
        if (this.f35440d == null) {
            this.f35440d = new a();
        }
        List list = this.f35440d;
        Intrinsics.checkNotNull(list);
        return list;
    }

    @Override // kotlin.text.MatchResult
    public IntRange c() {
        IntRange h10;
        h10 = l.h(f());
        return h10;
    }

    @Override // kotlin.text.MatchResult
    public h d() {
        return this.f35439c;
    }

    @Override // kotlin.text.MatchResult
    public String getValue() {
        String group = f().group();
        Intrinsics.checkNotNullExpressionValue(group, "group(...)");
        return group;
    }

    @Override // kotlin.text.MatchResult
    public MatchResult next() {
        int i10;
        MatchResult f10;
        int end = f().end();
        if (f().end() == f().start()) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        int i11 = end + i10;
        if (i11 <= this.f35438b.length()) {
            Matcher matcher = this.f35437a.pattern().matcher(this.f35438b);
            Intrinsics.checkNotNullExpressionValue(matcher, "matcher(...)");
            f10 = l.f(matcher, i11, this.f35438b);
            return f10;
        }
        return null;
    }
}
