package ka;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import com.facebook.common.references.CloseableReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import r8.h;
import sa.k;
import va.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements x8.a {

    /* renamed from: c  reason: collision with root package name */
    public static final a f32821c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final b f32822a;

    /* renamed from: b  reason: collision with root package name */
    private final com.facebook.imagepipeline.memory.d f32823b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final BitmapFactory.Options b(int i10, Bitmap.Config config) {
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inDither = true;
            options.inPreferredConfig = config;
            options.inPurgeable = true;
            options.inInputShareable = true;
            options.inSampleSize = i10;
            options.inMutable = true;
            return options;
        }

        private a() {
        }
    }

    public c(y poolFactory) {
        Intrinsics.checkNotNullParameter(poolFactory, "poolFactory");
        this.f32822a = new b(poolFactory.h());
        com.facebook.imagepipeline.memory.d d10 = poolFactory.d();
        Intrinsics.checkNotNullExpressionValue(d10, "getFlexByteArrayPool(...)");
        this.f32823b = d10;
    }

    @Override // x8.a
    public Bitmap a(int i10, int i11, Bitmap.Config bitmapConfig) {
        k kVar;
        Intrinsics.checkNotNullParameter(bitmapConfig, "bitmapConfig");
        CloseableReference a10 = this.f32822a.a((short) i10, (short) i11);
        Intrinsics.checkNotNullExpressionValue(a10, "generate(...)");
        try {
            kVar = new k(a10);
        } catch (Throwable th2) {
            th = th2;
            kVar = null;
        }
        try {
            kVar.B1(fa.b.f24079b);
            BitmapFactory.Options b10 = f32821c.b(kVar.t0(), bitmapConfig);
            int size = ((h) a10.F0()).size();
            Object F0 = a10.F0();
            Intrinsics.checkNotNullExpressionValue(F0, "get(...)");
            CloseableReference a11 = this.f32823b.a(size + 2);
            Object F02 = a11.F0();
            Intrinsics.checkNotNullExpressionValue(F02, "get(...)");
            byte[] bArr = (byte[]) F02;
            ((h) F0).o(0, bArr, 0, size);
            Bitmap decodeByteArray = BitmapFactory.decodeByteArray(bArr, 0, size, b10);
            if (decodeByteArray != null) {
                decodeByteArray.setHasAlpha(true);
                decodeByteArray.eraseColor(0);
                CloseableReference.N(a11);
                k.l(kVar);
                CloseableReference.N(a10);
                return decodeByteArray;
            }
            throw new IllegalStateException("Required value was null.");
        } catch (Throwable th3) {
            th = th3;
            CloseableReference.N(null);
            k.l(kVar);
            CloseableReference.N(a10);
            throw th;
        }
    }
}
