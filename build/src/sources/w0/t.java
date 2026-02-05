package w0;

import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class t extends z implements Parcelable {

    /* renamed from: o  reason: collision with root package name */
    public static final b f52474o = new b(null);
    @NotNull
    public static final Parcelable.Creator<t> CREATOR = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements Parcelable.ClassLoaderCreator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public t createFromParcel(Parcel parcel) {
            return createFromParcel(parcel, null);
        }

        @Override // android.os.Parcelable.ClassLoaderCreator
        /* renamed from: b */
        public t createFromParcel(Parcel parcel, ClassLoader classLoader) {
            a0 c10;
            if (classLoader == null) {
                classLoader = a.class.getClassLoader();
            }
            Object readValue = parcel.readValue(classLoader);
            int readInt = parcel.readInt();
            if (readInt != 0) {
                if (readInt != 1) {
                    if (readInt == 2) {
                        c10 = b0.f();
                    } else {
                        throw new IllegalStateException("Unsupported MutableState policy " + readInt + " was restored");
                    }
                } else {
                    c10 = b0.g();
                }
            } else {
                c10 = b0.c();
            }
            return new t(readValue, c10);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: c */
        public t[] newArray(int i10) {
            return new t[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    public t(Object obj, a0 a0Var) {
        super(obj, a0Var);
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int i11;
        parcel.writeValue(getValue());
        a0 d10 = d();
        if (Intrinsics.areEqual(d10, b0.c())) {
            i11 = 0;
        } else if (Intrinsics.areEqual(d10, b0.g())) {
            i11 = 1;
        } else if (Intrinsics.areEqual(d10, b0.f())) {
            i11 = 2;
        } else {
            throw new IllegalStateException("Only known types of MutableState's SnapshotMutationPolicy are supported");
        }
        parcel.writeInt(i11);
    }
}
