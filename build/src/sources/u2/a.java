package u2;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a implements Parcelable {

    /* renamed from: d  reason: collision with root package name */
    private final Parcelable f51217d;

    /* renamed from: e  reason: collision with root package name */
    public static final a f51216e = new C0708a();
    public static final Parcelable.Creator<a> CREATOR = new b();

    /* renamed from: u2.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class C0708a extends a {
        C0708a() {
            super((C0708a) null);
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
                return a.f51216e;
            }
            throw new IllegalStateException("superState must be null");
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: c */
        public a[] newArray(int i10) {
            return new a[i10];
        }
    }

    /* synthetic */ a(C0708a c0708a) {
        this();
    }

    public final Parcelable a() {
        return this.f51217d;
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeParcelable(this.f51217d, i10);
    }

    private a() {
        this.f51217d = null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(Parcelable parcelable) {
        if (parcelable != null) {
            this.f51217d = parcelable == f51216e ? null : parcelable;
            return;
        }
        throw new IllegalArgumentException("superState must not be null");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(Parcel parcel, ClassLoader classLoader) {
        Parcelable readParcelable = parcel.readParcelable(classLoader);
        this.f51217d = readParcelable == null ? f51216e : readParcelable;
    }
}
