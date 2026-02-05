package androidx.versionedparcelable;

import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class b extends a {

    /* renamed from: d  reason: collision with root package name */
    private final SparseIntArray f5554d;

    /* renamed from: e  reason: collision with root package name */
    private final Parcel f5555e;

    /* renamed from: f  reason: collision with root package name */
    private final int f5556f;

    /* renamed from: g  reason: collision with root package name */
    private final int f5557g;

    /* renamed from: h  reason: collision with root package name */
    private final String f5558h;

    /* renamed from: i  reason: collision with root package name */
    private int f5559i;

    /* renamed from: j  reason: collision with root package name */
    private int f5560j;

    /* renamed from: k  reason: collision with root package name */
    private int f5561k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Parcel parcel) {
        this(parcel, parcel.dataPosition(), parcel.dataSize(), "", new u0.a(), new u0.a(), new u0.a());
    }

    @Override // androidx.versionedparcelable.a
    public void A(byte[] bArr) {
        if (bArr != null) {
            this.f5555e.writeInt(bArr.length);
            this.f5555e.writeByteArray(bArr);
            return;
        }
        this.f5555e.writeInt(-1);
    }

    @Override // androidx.versionedparcelable.a
    protected void C(CharSequence charSequence) {
        TextUtils.writeToParcel(charSequence, this.f5555e, 0);
    }

    @Override // androidx.versionedparcelable.a
    public void E(int i10) {
        this.f5555e.writeInt(i10);
    }

    @Override // androidx.versionedparcelable.a
    public void G(Parcelable parcelable) {
        this.f5555e.writeParcelable(parcelable, 0);
    }

    @Override // androidx.versionedparcelable.a
    public void I(String str) {
        this.f5555e.writeString(str);
    }

    @Override // androidx.versionedparcelable.a
    public void a() {
        int i10 = this.f5559i;
        if (i10 >= 0) {
            int i11 = this.f5554d.get(i10);
            int dataPosition = this.f5555e.dataPosition();
            this.f5555e.setDataPosition(i11);
            this.f5555e.writeInt(dataPosition - i11);
            this.f5555e.setDataPosition(dataPosition);
        }
    }

    @Override // androidx.versionedparcelable.a
    protected a b() {
        Parcel parcel = this.f5555e;
        int dataPosition = parcel.dataPosition();
        int i10 = this.f5560j;
        if (i10 == this.f5556f) {
            i10 = this.f5557g;
        }
        return new b(parcel, dataPosition, i10, this.f5558h + "  ", this.f5551a, this.f5552b, this.f5553c);
    }

    @Override // androidx.versionedparcelable.a
    public boolean g() {
        if (this.f5555e.readInt() != 0) {
            return true;
        }
        return false;
    }

    @Override // androidx.versionedparcelable.a
    public byte[] i() {
        int readInt = this.f5555e.readInt();
        if (readInt < 0) {
            return null;
        }
        byte[] bArr = new byte[readInt];
        this.f5555e.readByteArray(bArr);
        return bArr;
    }

    @Override // androidx.versionedparcelable.a
    protected CharSequence k() {
        return (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(this.f5555e);
    }

    @Override // androidx.versionedparcelable.a
    public boolean m(int i10) {
        while (this.f5560j < this.f5557g) {
            int i11 = this.f5561k;
            if (i11 == i10) {
                return true;
            }
            if (String.valueOf(i11).compareTo(String.valueOf(i10)) > 0) {
                return false;
            }
            this.f5555e.setDataPosition(this.f5560j);
            int readInt = this.f5555e.readInt();
            this.f5561k = this.f5555e.readInt();
            this.f5560j += readInt;
        }
        if (this.f5561k != i10) {
            return false;
        }
        return true;
    }

    @Override // androidx.versionedparcelable.a
    public int o() {
        return this.f5555e.readInt();
    }

    @Override // androidx.versionedparcelable.a
    public Parcelable q() {
        return this.f5555e.readParcelable(getClass().getClassLoader());
    }

    @Override // androidx.versionedparcelable.a
    public String s() {
        return this.f5555e.readString();
    }

    @Override // androidx.versionedparcelable.a
    public void w(int i10) {
        a();
        this.f5559i = i10;
        this.f5554d.put(i10, this.f5555e.dataPosition());
        E(0);
        E(i10);
    }

    @Override // androidx.versionedparcelable.a
    public void y(boolean z10) {
        this.f5555e.writeInt(z10 ? 1 : 0);
    }

    private b(Parcel parcel, int i10, int i11, String str, u0.a aVar, u0.a aVar2, u0.a aVar3) {
        super(aVar, aVar2, aVar3);
        this.f5554d = new SparseIntArray();
        this.f5559i = -1;
        this.f5561k = -1;
        this.f5555e = parcel;
        this.f5556f = i10;
        this.f5557g = i11;
        this.f5560j = i10;
        this.f5558h = str;
    }
}
