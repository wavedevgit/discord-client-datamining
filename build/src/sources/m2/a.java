package m2;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Parcel;
import android.os.ResultReceiver;
import h2.e;
import h2.f;
import h2.i;
import h2.k;
import h2.m;
import h2.n;
import h2.p;
import h2.r;
import java.util.Set;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: b  reason: collision with root package name */
    public static final C0489a f37242b = new C0489a(null);

    /* renamed from: c  reason: collision with root package name */
    private static final Set f37243c = x0.i(7, 20);

    /* renamed from: d  reason: collision with root package name */
    private static final int f37244d = 1;

    /* renamed from: a  reason: collision with root package name */
    private final Context f37245a;

    /* renamed from: m2.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0489a {
        public /* synthetic */ C0489a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final e a(String str, String str2) {
            if (Intrinsics.areEqual(str, "CREATE_CANCELED")) {
                return new h2.c(str2);
            }
            if (Intrinsics.areEqual(str, "CREATE_INTERRUPTED")) {
                return new f(str2);
            }
            return new i(str2);
        }

        public final int b() {
            return a.f37244d;
        }

        public final m c(String str, String str2) {
            if (str != null) {
                int hashCode = str.hashCode();
                if (hashCode != -1567968963) {
                    if (hashCode != -154594663) {
                        if (hashCode == 1996705159 && str.equals("GET_NO_CREDENTIALS")) {
                            return new r(str2);
                        }
                    } else if (str.equals("GET_INTERRUPTED")) {
                        return new n(str2);
                    }
                } else if (str.equals("GET_CANCELED_TAG")) {
                    return new k(str2);
                }
            }
            return new p(str2);
        }

        public final Set d() {
            return a.f37243c;
        }

        public final void e(ResultReceiver resultReceiver, String errName, String errMsg) {
            Intrinsics.checkNotNullParameter(resultReceiver, "<this>");
            Intrinsics.checkNotNullParameter(errName, "errName");
            Intrinsics.checkNotNullParameter(errMsg, "errMsg");
            Bundle bundle = new Bundle();
            bundle.putBoolean("FAILURE_RESPONSE", true);
            bundle.putString("EXCEPTION_TYPE", errName);
            bundle.putString("EXCEPTION_MESSAGE", errMsg);
            resultReceiver.send(Integer.MAX_VALUE, bundle);
        }

        public final void f(ResultReceiver resultReceiver, int i10, int i11, Intent intent) {
            Intrinsics.checkNotNullParameter(resultReceiver, "<this>");
            Bundle bundle = new Bundle();
            bundle.putBoolean("FAILURE_RESPONSE", false);
            bundle.putInt("ACTIVITY_REQUEST_CODE", i10);
            bundle.putParcelable("RESULT_DATA", intent);
            resultReceiver.send(i11, bundle);
        }

        private C0489a() {
        }
    }

    public a(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f37245a = context;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c(ResultReceiver resultReceiver, Intent hiddenIntent, String typeTag) {
        Intrinsics.checkNotNullParameter(resultReceiver, "resultReceiver");
        Intrinsics.checkNotNullParameter(hiddenIntent, "hiddenIntent");
        Intrinsics.checkNotNullParameter(typeTag, "typeTag");
        hiddenIntent.putExtra("TYPE", typeTag);
        hiddenIntent.putExtra("ACTIVITY_REQUEST_CODE", f37244d);
        hiddenIntent.putExtra("RESULT_RECEIVER", d(resultReceiver));
        hiddenIntent.setFlags(65536);
    }

    public final ResultReceiver d(ResultReceiver resultReceiver) {
        Parcel obtain = Parcel.obtain();
        Intrinsics.checkNotNullExpressionValue(obtain, "obtain(...)");
        Intrinsics.checkNotNull(resultReceiver);
        resultReceiver.writeToParcel(obtain, 0);
        obtain.setDataPosition(0);
        ResultReceiver resultReceiver2 = (ResultReceiver) ResultReceiver.CREATOR.createFromParcel(obtain);
        obtain.recycle();
        return resultReceiver2;
    }
}
