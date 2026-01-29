package com.linecorp.apng.decoder;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.os.Trace;
import com.facebook.react.devsupport.StackTraceHelper;
import com.linecorp.apng.decoder.ApngException;
import java.io.InputStream;
import kotlin.Metadata;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u0015\n\u0002\b\u0002\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0016\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\b\u0000\u0018\u0000 A2\u00020\u0001:\u0002BABE\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0002\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\b\b\u0001\u0010\t\u001a\u00020\u0002\u0012\b\b\u0001\u0010\u000b\u001a\u00020\n¢\u0006\u0004\b\f\u0010\rJ\r\u0010\u000f\u001a\u00020\u000e¢\u0006\u0004\b\u000f\u0010\u0010J\r\u0010\u0011\u001a\u00020\u0000¢\u0006\u0004\b\u0011\u0010\u0012J\r\u0010\u0013\u001a\u00020\u000e¢\u0006\u0004\b\u0013\u0010\u0010J7\u0010\u001c\u001a\u00020\u000e2\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010\u0016\u001a\u00020\u00152\b\u0010\u0018\u001a\u0004\u0018\u00010\u00172\u0006\u0010\u0019\u001a\u00020\u00172\u0006\u0010\u001b\u001a\u00020\u001a¢\u0006\u0004\b\u001c\u0010\u001dR\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u001fR\u0017\u0010\u0004\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b \u0010\u001f\u001a\u0004\b!\u0010\"R\u0017\u0010\u0005\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b#\u0010\u001f\u001a\u0004\b$\u0010\"R\u0017\u0010\u0006\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b%\u0010\u001f\u001a\u0004\b&\u0010\"R\u0017\u0010\b\u001a\u00020\u00078\u0006¢\u0006\f\n\u0004\b'\u0010(\u001a\u0004\b)\u0010*R\u0017\u0010\t\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b+\u0010\u001f\u001a\u0004\b,\u0010\"R\u0017\u0010\u000b\u001a\u00020\n8\u0006¢\u0006\f\n\u0004\b-\u0010.\u001a\u0004\b/\u00100R\u0014\u00104\u001a\u0002018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b2\u00103R\u001a\u00107\u001a\u00020\u00028\u0006X\u0087\u0004¢\u0006\f\n\u0004\b5\u0010\u001f\u001a\u0004\b6\u0010\"R\u0011\u00109\u001a\u00020\u00028F¢\u0006\u0006\u001a\u0004\b8\u0010\"R\u0011\u0010;\u001a\u00020:8F¢\u0006\u0006\u001a\u0004\b;\u0010<R\u0011\u0010@\u001a\u00020=8F¢\u0006\u0006\u001a\u0004\b>\u0010?¨\u0006C"}, d2 = {"Lcom/linecorp/apng/decoder/Apng;", "", "", StackTraceHelper.ID_KEY, "width", "height", "frameCount", "", "frameDurations", "loopCount", "", "allFrameByteCount", "<init>", "(IIII[IIJ)V", "", "recycle", "()V", "copy", "()Lcom/linecorp/apng/decoder/Apng;", "finalize", "frameIndex", "Landroid/graphics/Canvas;", "canvas", "Landroid/graphics/Rect;", "src", "dst", "Landroid/graphics/Paint;", "paint", "drawWithIndex", "(ILandroid/graphics/Canvas;Landroid/graphics/Rect;Landroid/graphics/Rect;Landroid/graphics/Paint;)V", "a", "I", "b", "getWidth", "()I", "c", "getHeight", "d", "getFrameCount", "e", "[I", "getFrameDurations", "()[I", "f", "getLoopCount", "g", "J", "getAllFrameByteCount", "()J", "Landroid/graphics/Bitmap;", "h", "Landroid/graphics/Bitmap;", "bitmap", "i", "getDuration", "duration", "getByteCount", "byteCount", "", "isRecycled", "()Z", "Landroid/graphics/Bitmap$Config;", "getConfig", "()Landroid/graphics/Bitmap$Config;", "config", "Companion", "DecodeResult", "apng-drawable_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Apng {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f18190a;

    /* renamed from: b  reason: collision with root package name */
    private final int f18191b;

    /* renamed from: c  reason: collision with root package name */
    private final int f18192c;

    /* renamed from: d  reason: collision with root package name */
    private final int f18193d;

    /* renamed from: e  reason: collision with root package name */
    private final int[] f18194e;

    /* renamed from: f  reason: collision with root package name */
    private final int f18195f;

    /* renamed from: g  reason: collision with root package name */
    private final long f18196g;

    /* renamed from: h  reason: collision with root package name */
    private final Bitmap f18197h;

    /* renamed from: i  reason: collision with root package name */
    private final int f18198i;

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0006\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0017\u0010\u0007\u001a\u00020\u00062\u0006\u0010\u0005\u001a\u00020\u0004H\u0002¢\u0006\u0004\b\u0007\u0010\bJ\u0015\u0010\f\u001a\u00020\u000b2\u0006\u0010\n\u001a\u00020\t¢\u0006\u0004\b\f\u0010\rJ\u0015\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\n\u001a\u00020\t¢\u0006\u0004\b\u000f\u0010\u0010J\u0015\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\u0011\u001a\u00020\u000b¢\u0006\u0004\b\u0012\u0010\u0013¨\u0006\u0014"}, d2 = {"Lcom/linecorp/apng/decoder/Apng$Companion;", "", "<init>", "()V", "", "resultCode", "", "a", "(I)V", "Ljava/io/InputStream;", "stream", "Lcom/linecorp/apng/decoder/Apng;", "decode", "(Ljava/io/InputStream;)Lcom/linecorp/apng/decoder/Apng;", "", "isApng", "(Ljava/io/InputStream;)Z", "apng", "copy", "(Lcom/linecorp/apng/decoder/Apng;)Lcom/linecorp/apng/decoder/Apng;", "apng-drawable_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final void a(int i10) {
            if (i10 >= 0) {
                return;
            }
            throw new ApngException(ApngException.ErrorCode.Companion.fromErrorCode$apng_drawable_release(i10), null, 2, null);
        }

        @NotNull
        public final Apng copy(@NotNull Apng apng) {
            Intrinsics.checkNotNullParameter(apng, "apng");
            DecodeResult decodeResult = new DecodeResult();
            Trace.beginSection("Apng#copy");
            try {
                int copy = ApngDecoderJni.copy(apng.f18190a, decodeResult);
                Trace.endSection();
                a(copy);
                try {
                    return new Apng(copy, decodeResult.getWidth(), decodeResult.getHeight(), decodeResult.getFrameCount(), decodeResult.getFrameDurations(), decodeResult.getLoopCount(), decodeResult.getAllFrameByteCount());
                } finally {
                    ApngException apngException = new ApngException(th);
                }
            } finally {
            }
        }

        @NotNull
        public final Apng decode(@NotNull InputStream stream) {
            Intrinsics.checkNotNullParameter(stream, "stream");
            DecodeResult decodeResult = new DecodeResult();
            Trace.beginSection("Apng#decode");
            try {
                int decode = ApngDecoderJni.decode(stream, decodeResult);
                Trace.endSection();
                a(decode);
                try {
                    return new Apng(decode, decodeResult.getWidth(), decodeResult.getHeight(), decodeResult.getFrameCount(), decodeResult.getFrameDurations(), decodeResult.getLoopCount(), decodeResult.getAllFrameByteCount());
                } finally {
                    ApngException apngException = new ApngException(th);
                }
            } finally {
            }
        }

        public final boolean isApng(@NotNull InputStream stream) {
            Intrinsics.checkNotNullParameter(stream, "stream");
            try {
                return ApngDecoderJni.isApng(stream);
            } catch (Throwable th2) {
                throw new ApngException(th2);
            }
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u000e\n\u0002\u0010\u0015\n\u0002\b\u0005\n\u0002\u0010\t\n\u0002\b\u0005\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003R\u001a\u0010\u0004\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0006\u0010\u0007\"\u0004\b\b\u0010\tR\u001a\u0010\n\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000b\u0010\u0007\"\u0004\b\f\u0010\tR\u001a\u0010\r\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000e\u0010\u0007\"\u0004\b\u000f\u0010\tR\u001a\u0010\u0010\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0011\u0010\u0007\"\u0004\b\u0012\u0010\tR\u001a\u0010\u0013\u001a\u00020\u0014X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0015\u0010\u0016\"\u0004\b\u0017\u0010\u0018R\u001a\u0010\u0019\u001a\u00020\u001aX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001b\u0010\u001c\"\u0004\b\u001d\u0010\u001e¨\u0006\u001f"}, d2 = {"Lcom/linecorp/apng/decoder/Apng$DecodeResult;", "", "<init>", "()V", "width", "", "getWidth", "()I", "setWidth", "(I)V", "height", "getHeight", "setHeight", "frameCount", "getFrameCount", "setFrameCount", "loopCount", "getLoopCount", "setLoopCount", "frameDurations", "", "getFrameDurations", "()[I", "setFrameDurations", "([I)V", "allFrameByteCount", "", "getAllFrameByteCount", "()J", "setAllFrameByteCount", "(J)V", "apng-drawable_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class DecodeResult {
        private long allFrameByteCount;
        private int frameCount;
        @NotNull
        private int[] frameDurations = new int[0];
        private int height;
        private int loopCount;
        private int width;

        public final long getAllFrameByteCount() {
            return this.allFrameByteCount;
        }

        public final int getFrameCount() {
            return this.frameCount;
        }

        @NotNull
        public final int[] getFrameDurations() {
            return this.frameDurations;
        }

        public final int getHeight() {
            return this.height;
        }

        public final int getLoopCount() {
            return this.loopCount;
        }

        public final int getWidth() {
            return this.width;
        }

        public final void setAllFrameByteCount(long j10) {
            this.allFrameByteCount = j10;
        }

        public final void setFrameCount(int i10) {
            this.frameCount = i10;
        }

        public final void setFrameDurations(@NotNull int[] iArr) {
            Intrinsics.checkNotNullParameter(iArr, "<set-?>");
            this.frameDurations = iArr;
        }

        public final void setHeight(int i10) {
            this.height = i10;
        }

        public final void setLoopCount(int i10) {
            this.loopCount = i10;
        }

        public final void setWidth(int i10) {
            this.width = i10;
        }
    }

    public Apng(int i10, int i11, int i12, int i13, @NotNull int[] frameDurations, int i14, long j10) {
        Intrinsics.checkNotNullParameter(frameDurations, "frameDurations");
        this.f18190a = i10;
        this.f18191b = i11;
        this.f18192c = i12;
        this.f18193d = i13;
        this.f18194e = frameDurations;
        this.f18195f = i14;
        this.f18196g = j10;
        Bitmap createBitmap = Bitmap.createBitmap(i11, i12, Bitmap.Config.ARGB_8888);
        Intrinsics.checkNotNullExpressionValue(createBitmap, "createBitmap(...)");
        this.f18197h = createBitmap;
        Trace.beginSection("Apng#draw");
        ApngDecoderJni.draw(i10, 0, createBitmap);
        Trace.endSection();
        this.f18198i = i.G0(frameDurations);
    }

    @NotNull
    public final Apng copy() {
        return Companion.copy(this);
    }

    public final void drawWithIndex(int i10, @NotNull Canvas canvas, Rect rect, @NotNull Rect dst, @NotNull Paint paint) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        Intrinsics.checkNotNullParameter(dst, "dst");
        Intrinsics.checkNotNullParameter(paint, "paint");
        Trace.beginSection("Apng#draw");
        ApngDecoderJni.draw(this.f18190a, i10, this.f18197h);
        Trace.endSection();
        canvas.drawBitmap(this.f18197h, rect, dst, paint);
    }

    public final void finalize() {
        recycle();
    }

    public final long getAllFrameByteCount() {
        return this.f18196g;
    }

    public final int getByteCount() {
        return this.f18197h.getAllocationByteCount();
    }

    @NotNull
    public final Bitmap.Config getConfig() {
        Bitmap.Config config = this.f18197h.getConfig();
        Intrinsics.checkNotNullExpressionValue(config, "getConfig(...)");
        return config;
    }

    public final int getDuration() {
        return this.f18198i;
    }

    public final int getFrameCount() {
        return this.f18193d;
    }

    @NotNull
    public final int[] getFrameDurations() {
        return this.f18194e;
    }

    public final int getHeight() {
        return this.f18192c;
    }

    public final int getLoopCount() {
        return this.f18195f;
    }

    public final int getWidth() {
        return this.f18191b;
    }

    public final boolean isRecycled() {
        return this.f18197h.isRecycled();
    }

    public final void recycle() {
        ApngDecoderJni.recycle(this.f18190a);
    }
}
