package la;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import com.facebook.common.references.CloseableReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import s8.h;
import ta.k;
import wa.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements y8.a {

    /* renamed from: c  reason: collision with root package name */
    public static final a f35691c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final b f35692a;

    /* renamed from: b  reason: collision with root package name */
    private final com.facebook.imagepipeline.memory.d f35693b;

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
        this.f35692a = new b(poolFactory.h());
        com.facebook.imagepipeline.memory.d d10 = poolFactory.d();
        Intrinsics.checkNotNullExpressionValue(d10, "getFlexByteArrayPool(...)");
        this.f35693b = d10;
    }

    @Override // y8.a
    public Bitmap a(int i10, int i11, Bitmap.Config bitmapConfig) {
        k kVar;
        Intrinsics.checkNotNullParameter(bitmapConfig, "bitmapConfig");
        CloseableReference a10 = this.f35692a.a((short) i10, (short) i11);
        Intrinsics.checkNotNullExpressionValue(a10, "generate(...)");
        try {
            kVar = new k(a10);
        } catch (Throwable th2) {
            th = th2;
            kVar = null;
        }
        try {
            kVar.b1(ga.b.f25382b);
            BitmapFactory.Options b10 = f35691c.b(kVar.J(), bitmapConfig);
            int size = ((h) a10.J()).size();
            Object J = a10.J();
            Intrinsics.checkNotNullExpressionValue(J, "get(...)");
            CloseableReference a11 = this.f35693b.a(size + 2);
            Object J2 = a11.J();
            Intrinsics.checkNotNullExpressionValue(J2, "get(...)");
            byte[] bArr = (byte[]) J2;
            ((h) J).q(0, bArr, 0, size);
            Bitmap decodeByteArray = BitmapFactory.decodeByteArray(bArr, 0, size, b10);
            if (decodeByteArray != null) {
                decodeByteArray.setHasAlpha(true);
                decodeByteArray.eraseColor(0);
                CloseableReference.z(a11);
                k.i(kVar);
                CloseableReference.z(a10);
                return decodeByteArray;
            }
            throw new IllegalStateException("Required value was null.");
        } catch (Throwable th3) {
            th = th3;
            CloseableReference.z(null);
            k.i(kVar);
            CloseableReference.z(a10);
            throw th;
        }
    }
}
