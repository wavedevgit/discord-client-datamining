package np;

import androidx.lifecycle.b0;
import java.util.ArrayList;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements np.a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f41919d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final b0 f41920a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f41921b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f41922c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public e(b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f41920a = savedStateHandle;
        ArrayList arrayList = (ArrayList) savedStateHandle.b("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData");
        this.f41921b = arrayList == null ? new ArrayList() : arrayList;
        this.f41922c = true;
    }

    @Override // np.a
    public boolean a() {
        return this.f41922c;
    }

    @Override // np.a
    public void b(f stepData) {
        Intrinsics.checkNotNullParameter(stepData, "stepData");
        this.f41921b.add(stepData);
        this.f41920a.h("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData", this.f41921b);
    }

    public ArrayList c() {
        return new ArrayList(this.f41921b);
    }
}
