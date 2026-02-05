package rh;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.collection.SimpleArrayMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends u2.a {
    public static final Parcelable.Creator<a> CREATOR = new C0625a();

    /* renamed from: i  reason: collision with root package name */
    public final SimpleArrayMap f48819i;

    /* renamed from: rh.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0625a implements Parcelable.ClassLoaderCreator {
        C0625a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public a createFromParcel(Parcel parcel) {
            return new a(parcel, null, null);
        }

        @Override // android.os.Parcelable.ClassLoaderCreator
        /* renamed from: b */
        public a createFromParcel(Parcel parcel, ClassLoader classLoader) {
            return new a(parcel, classLoader, null);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: c */
        public a[] newArray(int i10) {
            return new a[i10];
        }
    }

    /* synthetic */ a(Parcel parcel, ClassLoader classLoader, C0625a c0625a) {
        this(parcel, classLoader);
    }

    public String toString() {
        return "ExtendableSavedState{" + Integer.toHexString(System.identityHashCode(this)) + " states=" + this.f48819i + "}";
    }

    @Override // u2.a, android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        super.writeToParcel(parcel, i10);
        int size = this.f48819i.size();
        parcel.writeInt(size);
        String[] strArr = new String[size];
        Bundle[] bundleArr = new Bundle[size];
        for (int i11 = 0; i11 < size; i11++) {
            strArr[i11] = (String) this.f48819i.f(i11);
            bundleArr[i11] = (Bundle) this.f48819i.j(i11);
        }
        parcel.writeStringArray(strArr);
        parcel.writeTypedArray(bundleArr, 0);
    }

    public a(Parcelable parcelable) {
        super(parcelable);
        this.f48819i = new SimpleArrayMap();
    }

    private a(Parcel parcel, ClassLoader classLoader) {
        super(parcel, classLoader);
        int readInt = parcel.readInt();
        String[] strArr = new String[readInt];
        parcel.readStringArray(strArr);
        Bundle[] bundleArr = new Bundle[readInt];
        parcel.readTypedArray(bundleArr, Bundle.CREATOR);
        this.f48819i = new SimpleArrayMap(readInt);
        for (int i10 = 0; i10 < readInt; i10++) {
            this.f48819i.put(strArr[i10], bundleArr[i10]);
        }
    }
}
