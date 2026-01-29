package com.msc.sa.aidl;

import android.os.Binder;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface ISACallback extends IInterface {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class Stub extends Binder implements ISACallback {
        static final int TRANSACTION_onReceiveAccessToken = 1;
        static final int TRANSACTION_onReceiveAuthCode = 4;
        static final int TRANSACTION_onReceiveChecklistValidation = 2;
        static final int TRANSACTION_onReceiveDisclaimerAgreement = 3;
        static final int TRANSACTION_onReceivePasswordConfirmation = 6;
        static final int TRANSACTION_onReceiveRLControlFMM = 7;
        static final int TRANSACTION_onReceiveRubinRequest = 8;
        static final int TRANSACTION_onReceiveSCloudAccessToken = 5;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        private static class a implements ISACallback {

            /* renamed from: c  reason: collision with root package name */
            private IBinder f18264c;

            a(IBinder iBinder) {
                this.f18264c = iBinder;
            }

            @Override // android.os.IInterface
            public IBinder asBinder() {
                return this.f18264c;
            }
        }

        public Stub() {
            attachInterface(this, "com.msc.sa.aidl.ISACallback");
        }

        public static ISACallback asInterface(IBinder iBinder) {
            if (iBinder == null) {
                return null;
            }
            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.msc.sa.aidl.ISACallback");
            if (queryLocalInterface != null && (queryLocalInterface instanceof ISACallback)) {
                return (ISACallback) queryLocalInterface;
            }
            return new a(iBinder);
        }

        @Override // android.os.IInterface
        public IBinder asBinder() {
            return this;
        }

        @Override // android.os.Binder
        public boolean onTransact(int i10, Parcel parcel, Parcel parcel2, int i11) {
            if (i10 >= 1 && i10 <= 16777215) {
                parcel.enforceInterface("com.msc.sa.aidl.ISACallback");
            }
            if (i10 == 1598968902) {
                parcel2.writeString("com.msc.sa.aidl.ISACallback");
                return true;
            }
            boolean z10 = false;
            switch (i10) {
                case 1:
                    int readInt = parcel.readInt();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    }
                    onReceiveAccessToken(readInt, z10, (Bundle) a.b(parcel, Bundle.CREATOR));
                    parcel2.writeNoException();
                    break;
                case 2:
                    int readInt2 = parcel.readInt();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    }
                    onReceiveChecklistValidation(readInt2, z10, (Bundle) a.b(parcel, Bundle.CREATOR));
                    parcel2.writeNoException();
                    break;
                case 3:
                    int readInt3 = parcel.readInt();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    }
                    onReceiveDisclaimerAgreement(readInt3, z10, (Bundle) a.b(parcel, Bundle.CREATOR));
                    parcel2.writeNoException();
                    break;
                case 4:
                    int readInt4 = parcel.readInt();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    }
                    onReceiveAuthCode(readInt4, z10, (Bundle) a.b(parcel, Bundle.CREATOR));
                    parcel2.writeNoException();
                    break;
                case 5:
                    int readInt5 = parcel.readInt();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    }
                    onReceiveSCloudAccessToken(readInt5, z10, (Bundle) a.b(parcel, Bundle.CREATOR));
                    parcel2.writeNoException();
                    break;
                case 6:
                    int readInt6 = parcel.readInt();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    }
                    onReceivePasswordConfirmation(readInt6, z10, (Bundle) a.b(parcel, Bundle.CREATOR));
                    parcel2.writeNoException();
                    break;
                case 7:
                    int readInt7 = parcel.readInt();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    }
                    onReceiveRLControlFMM(readInt7, z10, (Bundle) a.b(parcel, Bundle.CREATOR));
                    parcel2.writeNoException();
                    break;
                case 8:
                    int readInt8 = parcel.readInt();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    }
                    onReceiveRubinRequest(readInt8, z10, (Bundle) a.b(parcel, Bundle.CREATOR));
                    parcel2.writeNoException();
                    break;
                default:
                    return super.onTransact(i10, parcel, parcel2, i11);
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {
        /* JADX INFO: Access modifiers changed from: private */
        public static Object b(Parcel parcel, Parcelable.Creator creator) {
            if (parcel.readInt() != 0) {
                return creator.createFromParcel(parcel);
            }
            return null;
        }
    }

    void onReceiveAccessToken(int i10, boolean z10, Bundle bundle);

    void onReceiveAuthCode(int i10, boolean z10, Bundle bundle);

    void onReceiveChecklistValidation(int i10, boolean z10, Bundle bundle);

    void onReceiveDisclaimerAgreement(int i10, boolean z10, Bundle bundle);

    void onReceivePasswordConfirmation(int i10, boolean z10, Bundle bundle);

    void onReceiveRLControlFMM(int i10, boolean z10, Bundle bundle);

    void onReceiveRubinRequest(int i10, boolean z10, Bundle bundle);

    void onReceiveSCloudAccessToken(int i10, boolean z10, Bundle bundle);
}
