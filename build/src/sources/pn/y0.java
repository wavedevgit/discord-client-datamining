package pn;

import android.graphics.Bitmap;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class y0 {

    /* renamed from: a  reason: collision with root package name */
    private final Bitmap f46394a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends y0 {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Bitmap bitmap) {
            super(bitmap, null);
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends y0 {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Bitmap bitmap) {
            super(bitmap, null);
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends y0 {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Bitmap bitmap) {
            super(bitmap, null);
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        }
    }

    public /* synthetic */ y0(Bitmap bitmap, DefaultConstructorMarker defaultConstructorMarker) {
        this(bitmap);
    }

    public final Bitmap a() {
        return this.f46394a;
    }

    private y0(Bitmap bitmap) {
        this.f46394a = bitmap;
    }
}
