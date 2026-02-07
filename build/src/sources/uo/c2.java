package uo;

import com.withpersona.sdk2.inquiry.network.dto.CheckInquiryResponse;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c2 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f51937a;

        static {
            int[] iArr = new int[CheckInquiryResponse.PollingMode.values().length];
            try {
                iArr[CheckInquiryResponse.PollingMode.Blocking.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[CheckInquiryResponse.PollingMode.Background.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[CheckInquiryResponse.PollingMode.None.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f51937a = iArr;
        }
    }

    public static final b2 a(CheckInquiryResponse.PollingMode pollingMode) {
        Intrinsics.checkNotNullParameter(pollingMode, "<this>");
        int i10 = a.f51937a[pollingMode.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return b2.f51930e;
                }
                throw new qr.p();
            }
            return b2.f51929d;
        }
        return b2.f51930e;
    }
}
