package ym;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.ByteString;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements Parcelable {
    @NotNull
    public static final a CREATOR = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final wm.m f54660d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public p createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            ByteString.a aVar = ByteString.f44307o;
            byte[] createByteArray = parcel.createByteArray();
            Intrinsics.checkNotNull(createByteArray);
            Intrinsics.checkNotNullExpressionValue(createByteArray, "parcel.createByteArray()!!");
            return new p(wm.m.f52555c.a(ByteString.a.j(aVar, createByteArray, 0, 0, 3, null)));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public p[] newArray(int i10) {
            return new p[i10];
        }

        private a() {
        }
    }

    public p(wm.m snapshot) {
        Intrinsics.checkNotNullParameter(snapshot, "snapshot");
        this.f54660d = snapshot;
    }

    public final wm.m a() {
        return this.f54660d;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeByteArray(this.f54660d.c().L());
    }
}
