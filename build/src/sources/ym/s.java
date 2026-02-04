package ym;

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
        final /* synthetic */ Parcelable f54689d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Parcelable parcelable) {
            super(1);
            this.f54689d = parcelable;
        }

        public final void a(BufferedSink bufferedSink) {
            Intrinsics.checkNotNullParameter(bufferedSink, "bufferedSink");
            Parcel obtain = Parcel.obtain();
            Intrinsics.checkNotNullExpressionValue(obtain, "obtain()");
            obtain.writeParcelable(this.f54689d, 0);
            byte[] byteArray = obtain.marshall();
            Intrinsics.checkNotNullExpressionValue(byteArray, "byteArray");
            bufferedSink.write(byteArray);
            obtain.recycle();
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((BufferedSink) obj);
            return Unit.f32464a;
        }
    }

    public static final wm.i a(Parcelable parcelable) {
        Intrinsics.checkNotNullParameter(parcelable, "<this>");
        return wm.i.f52539c.c(new a(parcelable));
    }
}
