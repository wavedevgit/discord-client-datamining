package d;

import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final int f19886d;

    /* renamed from: e  reason: collision with root package name */
    private final Intent f19887e;

    /* renamed from: i  reason: collision with root package name */
    public static final b f19885i = new b(null);
    @NotNull
    public static final Parcelable.Creator<a> CREATOR = new C0264a();

    /* renamed from: d.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0264a implements Parcelable.Creator {
        C0264a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public a createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new a(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public a[] newArray(int i10) {
            return new a[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(int i10) {
            if (i10 != -1) {
                if (i10 != 0) {
                    return String.valueOf(i10);
                }
                return "RESULT_CANCELED";
            }
            return "RESULT_OK";
        }

        private b() {
        }
    }

    public a(int i10, Intent intent) {
        this.f19886d = i10;
        this.f19887e = intent;
    }

    public final Intent a() {
        return this.f19887e;
    }

    public final int b() {
        return this.f19886d;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        return "ActivityResult{resultCode=" + f19885i.a(this.f19886d) + ", data=" + this.f19887e + '}';
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel dest, int i10) {
        int i11;
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeInt(this.f19886d);
        if (this.f19887e == null) {
            i11 = 0;
        } else {
            i11 = 1;
        }
        dest.writeInt(i11);
        Intent intent = this.f19887e;
        if (intent != null) {
            intent.writeToParcel(dest, i10);
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public a(Parcel parcel) {
        this(parcel.readInt(), parcel.readInt() == 0 ? null : (Intent) Intent.CREATOR.createFromParcel(parcel));
        Intrinsics.checkNotNullParameter(parcel, "parcel");
    }
}
