package androidx.versionedparcelable;

import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class b extends a {

    /* renamed from: d  reason: collision with root package name */
    private final SparseIntArray f5473d;

    /* renamed from: e  reason: collision with root package name */
    private final Parcel f5474e;

    /* renamed from: f  reason: collision with root package name */
    private final int f5475f;

    /* renamed from: g  reason: collision with root package name */
    private final int f5476g;

    /* renamed from: h  reason: collision with root package name */
    private final String f5477h;

    /* renamed from: i  reason: collision with root package name */
    private int f5478i;

    /* renamed from: j  reason: collision with root package name */
    private int f5479j;

    /* renamed from: k  reason: collision with root package name */
    private int f5480k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Parcel parcel) {
        this(parcel, parcel.dataPosition(), parcel.dataSize(), "", new u0.a(), new u0.a(), new u0.a());
    }

    @Override // androidx.versionedparcelable.a
    public void A(byte[] bArr) {
        if (bArr != null) {
            this.f5474e.writeInt(bArr.length);
            this.f5474e.writeByteArray(bArr);
            return;
        }
        this.f5474e.writeInt(-1);
    }

    @Override // androidx.versionedparcelable.a
    protected void C(CharSequence charSequence) {
        TextUtils.writeToParcel(charSequence, this.f5474e, 0);
    }

    @Override // androidx.versionedparcelable.a
    public void E(int i10) {
        this.f5474e.writeInt(i10);
    }

    @Override // androidx.versionedparcelable.a
    public void G(Parcelable parcelable) {
        this.f5474e.writeParcelable(parcelable, 0);
    }

    @Override // androidx.versionedparcelable.a
    public void I(String str) {
        this.f5474e.writeString(str);
    }

    @Override // androidx.versionedparcelable.a
    public void a() {
        int i10 = this.f5478i;
        if (i10 >= 0) {
            int i11 = this.f5473d.get(i10);
            int dataPosition = this.f5474e.dataPosition();
            this.f5474e.setDataPosition(i11);
            this.f5474e.writeInt(dataPosition - i11);
            this.f5474e.setDataPosition(dataPosition);
        }
    }

    @Override // androidx.versionedparcelable.a
    protected a b() {
        Parcel parcel = this.f5474e;
        int dataPosition = parcel.dataPosition();
        int i10 = this.f5479j;
        if (i10 == this.f5475f) {
            i10 = this.f5476g;
        }
        return new b(parcel, dataPosition, i10, this.f5477h + "  ", this.f5470a, this.f5471b, this.f5472c);
    }

    @Override // androidx.versionedparcelable.a
    public boolean g() {
        if (this.f5474e.readInt() != 0) {
            return true;
        }
        return false;
    }

    @Override // androidx.versionedparcelable.a
    public byte[] i() {
        int readInt = this.f5474e.readInt();
        if (readInt < 0) {
            return null;
        }
        byte[] bArr = new byte[readInt];
        this.f5474e.readByteArray(bArr);
        return bArr;
    }

    @Override // androidx.versionedparcelable.a
    protected CharSequence k() {
        return (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(this.f5474e);
    }

    @Override // androidx.versionedparcelable.a
    public boolean m(int i10) {
        while (this.f5479j < this.f5476g) {
            int i11 = this.f5480k;
            if (i11 == i10) {
                return true;
            }
            if (String.valueOf(i11).compareTo(String.valueOf(i10)) > 0) {
                return false;
            }
            this.f5474e.setDataPosition(this.f5479j);
            int readInt = this.f5474e.readInt();
            this.f5480k = this.f5474e.readInt();
            this.f5479j += readInt;
        }
        if (this.f5480k != i10) {
            return false;
        }
        return true;
    }

    @Override // androidx.versionedparcelable.a
    public int o() {
        return this.f5474e.readInt();
    }

    @Override // androidx.versionedparcelable.a
    public Parcelable q() {
        return this.f5474e.readParcelable(getClass().getClassLoader());
    }

    @Override // androidx.versionedparcelable.a
    public String s() {
        return this.f5474e.readString();
    }

    @Override // androidx.versionedparcelable.a
    public void w(int i10) {
        a();
        this.f5478i = i10;
        this.f5473d.put(i10, this.f5474e.dataPosition());
        E(0);
        E(i10);
    }

    @Override // androidx.versionedparcelable.a
    public void y(boolean z10) {
        this.f5474e.writeInt(z10 ? 1 : 0);
    }

    private b(Parcel parcel, int i10, int i11, String str, u0.a aVar, u0.a aVar2, u0.a aVar3) {
        super(aVar, aVar2, aVar3);
        this.f5473d = new SparseIntArray();
        this.f5478i = -1;
        this.f5480k = -1;
        this.f5474e = parcel;
        this.f5475f = i10;
        this.f5476g = i11;
        this.f5479j = i10;
        this.f5477h = str;
    }
}
