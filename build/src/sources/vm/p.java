package vm;

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
    private final tm.m f51295d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public p createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            ByteString.a aVar = ByteString.f44379o;
            byte[] createByteArray = parcel.createByteArray();
            Intrinsics.checkNotNull(createByteArray);
            Intrinsics.checkNotNullExpressionValue(createByteArray, "parcel.createByteArray()!!");
            return new p(tm.m.f49735c.a(ByteString.a.j(aVar, createByteArray, 0, 0, 3, null)));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public p[] newArray(int i10) {
            return new p[i10];
        }

        private a() {
        }
    }

    public p(tm.m snapshot) {
        Intrinsics.checkNotNullParameter(snapshot, "snapshot");
        this.f51295d = snapshot;
    }

    public final tm.m a() {
        return this.f51295d;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeByteArray(this.f51295d.c().L());
    }
}
