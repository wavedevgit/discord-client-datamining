package xf;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends hf.a {

    /* renamed from: d  reason: collision with root package name */
    private final PendingIntent f53261d;

    /* renamed from: e  reason: collision with root package name */
    public static final a f53260e = new a(null);
    @NotNull
    public static final Parcelable.Creator<i> CREATOR = new j();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        private a() {
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public i(PendingIntent pendingIntent) {
        Intrinsics.checkNotNullParameter(pendingIntent, "pendingIntent");
        this.f53261d = pendingIntent;
    }

    public final PendingIntent b() {
        return this.f53261d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        j.c(this, dest, i10);
    }
}
