package u2;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final Parcelable f50389d;

    /* renamed from: e  reason: collision with root package name */
    public static final a f50388e = new C0631a();
    public static final Parcelable.Creator<a> CREATOR = new b();

    /* renamed from: u2.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class C0631a extends a {
        C0631a() {
            super((C0631a) null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Parcelable.ClassLoaderCreator {
        b() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public a createFromParcel(Parcel parcel) {
            return createFromParcel(parcel, null);
        }

        @Override // android.os.Parcelable.ClassLoaderCreator
        /* renamed from: b */
        public a createFromParcel(Parcel parcel, ClassLoader classLoader) {
            if (parcel.readParcelable(classLoader) == null) {
                return a.f50388e;
            }
            throw new IllegalStateException("superState must be null");
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: c */
        public a[] newArray(int i10) {
            return new a[i10];
        }
    }

    /* synthetic */ a(C0631a c0631a) {
        this();
    }

    public final Parcelable a() {
        return this.f50389d;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeParcelable(this.f50389d, i10);
    }

    private a() {
        this.f50389d = null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(Parcelable parcelable) {
        if (parcelable != null) {
            this.f50389d = parcelable == f50388e ? null : parcelable;
            return;
        }
        throw new IllegalArgumentException("superState must not be null");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(Parcel parcel, ClassLoader classLoader) {
        Parcelable readParcelable = parcel.readParcelable(classLoader);
        this.f50389d = readParcelable == null ? f50388e : readParcelable;
    }
}
