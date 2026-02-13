package yp;

import android.os.Parcel;
import android.os.Parcelable;
import cq.f;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import wp.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements f {
    @NotNull
    public static final Parcelable.Creator<b> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f56250d;

    /* renamed from: e  reason: collision with root package name */
    private final a1 f56251e;

    /* renamed from: i  reason: collision with root package name */
    private final a1 f56252i;

    /* renamed from: o  reason: collision with root package name */
    private final a1 f56253o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final b createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new b(parcel.readString(), (a1) parcel.readParcelable(b.class.getClassLoader()), (a1) parcel.readParcelable(b.class.getClassLoader()), (a1) parcel.readParcelable(b.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final b[] newArray(int i10) {
            return new b[i10];
        }
    }

    public b(String stepName, a1 a1Var, a1 a1Var2, a1 a1Var3) {
        Intrinsics.checkNotNullParameter(stepName, "stepName");
        this.f56250d = stepName;
        this.f56251e = a1Var;
        this.f56252i = a1Var2;
        this.f56253o = a1Var3;
    }

    public final a1 a() {
        return this.f56251e;
    }

    public String b() {
        return this.f56250d;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f56250d, bVar.f56250d) && Intrinsics.areEqual(this.f56251e, bVar.f56251e) && Intrinsics.areEqual(this.f56252i, bVar.f56252i) && Intrinsics.areEqual(this.f56253o, bVar.f56253o)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = this.f56250d.hashCode() * 31;
        a1 a1Var = this.f56251e;
        int i10 = 0;
        if (a1Var == null) {
            hashCode = 0;
        } else {
            hashCode = a1Var.hashCode();
        }
        int i11 = (hashCode3 + hashCode) * 31;
        a1 a1Var2 = this.f56252i;
        if (a1Var2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = a1Var2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        a1 a1Var3 = this.f56253o;
        if (a1Var3 != null) {
            i10 = a1Var3.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        String str = this.f56250d;
        a1 a1Var = this.f56251e;
        a1 a1Var2 = this.f56252i;
        a1 a1Var3 = this.f56253o;
        return "SelfieStepData(stepName=" + str + ", centerCapture=" + a1Var + ", leftCapture=" + a1Var2 + ", rightCapture=" + a1Var3 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f56250d);
        dest.writeParcelable(this.f56251e, i10);
        dest.writeParcelable(this.f56252i, i10);
        dest.writeParcelable(this.f56253o, i10);
    }
}
