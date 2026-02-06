package uo;

import com.withpersona.sdk2.inquiry.internal.network.CreateInquirySessionResponse;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f51876a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f51877b;

        static {
            int[] iArr = new int[CreateInquirySessionResponse.GpsCollectionRequirement.values().length];
            try {
                iArr[CreateInquirySessionResponse.GpsCollectionRequirement.REQUIRE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[CreateInquirySessionResponse.GpsCollectionRequirement.OPTIONAL.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[CreateInquirySessionResponse.GpsCollectionRequirement.NONE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f51876a = iArr;
            int[] iArr2 = new int[CreateInquirySessionResponse.GpsPrecisionRequirement.values().length];
            try {
                iArr2[CreateInquirySessionResponse.GpsPrecisionRequirement.PRECISE.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[CreateInquirySessionResponse.GpsPrecisionRequirement.ROUGH.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f51877b = iArr2;
        }
    }

    public static final yp.a a(CreateInquirySessionResponse.GpsCollectionRequirement gpsCollectionRequirement) {
        Intrinsics.checkNotNullParameter(gpsCollectionRequirement, "<this>");
        int i10 = a.f51876a[gpsCollectionRequirement.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return yp.a.f55537i;
                }
                throw new qr.p();
            }
            return yp.a.f55536e;
        }
        return yp.a.f55535d;
    }

    public static final yp.e b(CreateInquirySessionResponse.GpsPrecisionRequirement gpsPrecisionRequirement) {
        Intrinsics.checkNotNullParameter(gpsPrecisionRequirement, "<this>");
        int i10 = a.f51877b[gpsPrecisionRequirement.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return yp.e.f55547d;
            }
            throw new qr.p();
        }
        return yp.e.f55548e;
    }
}
