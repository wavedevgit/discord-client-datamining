package sp;

import androidx.lifecycle.b0;
import java.util.ArrayList;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements sp.a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f50051d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final b0 f50052a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f50053b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f50054c;

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
        this.f50052a = savedStateHandle;
        ArrayList arrayList = (ArrayList) savedStateHandle.b("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData");
        this.f50053b = arrayList == null ? new ArrayList() : arrayList;
        this.f50054c = true;
    }

    @Override // sp.a
    public boolean a() {
        return this.f50054c;
    }

    @Override // sp.a
    public void b(f stepData) {
        Intrinsics.checkNotNullParameter(stepData, "stepData");
        this.f50053b.add(stepData);
        this.f50052a.h("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData", this.f50053b);
    }

    public ArrayList c() {
        return new ArrayList(this.f50053b);
    }
}
