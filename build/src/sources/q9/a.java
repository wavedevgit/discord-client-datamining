package q9;

import android.net.Uri;
import com.facebook.cache.common.CacheKey;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements CacheKey {

    /* renamed from: c  reason: collision with root package name */
    public static final C0576a f47290c = new C0576a(null);

    /* renamed from: a  reason: collision with root package name */
    private final boolean f47291a;

    /* renamed from: b  reason: collision with root package name */
    private final String f47292b;

    /* renamed from: q9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0576a {
        public /* synthetic */ C0576a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0576a() {
        }
    }

    public a(int i10, boolean z10) {
        this.f47291a = z10;
        this.f47292b = "anim://" + i10;
    }

    @Override // com.facebook.cache.common.CacheKey
    public String a() {
        return this.f47292b;
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean b(Uri uri) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        String uri2 = uri.toString();
        Intrinsics.checkNotNullExpressionValue(uri2, "toString(...)");
        return StringsKt.P(uri2, this.f47292b, false, 2, null);
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean c() {
        return false;
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean equals(Object obj) {
        if (!this.f47291a) {
            return super.equals(obj);
        }
        if (this == obj) {
            return true;
        }
        if (obj != null && Intrinsics.areEqual(a.class, obj.getClass())) {
            return Intrinsics.areEqual(this.f47292b, ((a) obj).f47292b);
        }
        return false;
    }

    @Override // com.facebook.cache.common.CacheKey
    public int hashCode() {
        if (!this.f47291a) {
            return super.hashCode();
        }
        return this.f47292b.hashCode();
    }
}
