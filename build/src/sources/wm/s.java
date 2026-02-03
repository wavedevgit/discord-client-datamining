package wm;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import okio.BufferedSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class s {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Parcelable f52403d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Parcelable parcelable) {
            super(1);
            this.f52403d = parcelable;
        }

        public final void a(BufferedSink bufferedSink) {
            Intrinsics.checkNotNullParameter(bufferedSink, "bufferedSink");
            Parcel obtain = Parcel.obtain();
            Intrinsics.checkNotNullExpressionValue(obtain, "obtain()");
            obtain.writeParcelable(this.f52403d, 0);
            byte[] byteArray = obtain.marshall();
            Intrinsics.checkNotNullExpressionValue(byteArray, "byteArray");
            bufferedSink.write(byteArray);
            obtain.recycle();
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((BufferedSink) obj);
            return Unit.f33074a;
        }
    }

    public static final um.i a(Parcelable parcelable) {
        Intrinsics.checkNotNullParameter(parcelable, "<this>");
        return um.i.f50480c.c(new a(parcelable));
    }
}
