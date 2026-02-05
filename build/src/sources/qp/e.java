package qp;

import androidx.lifecycle.b0;
import java.util.ArrayList;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements qp.a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f47979d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final b0 f47980a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f47981b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f47982c;

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
        this.f47980a = savedStateHandle;
        ArrayList arrayList = (ArrayList) savedStateHandle.b("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData");
        this.f47981b = arrayList == null ? new ArrayList() : arrayList;
        this.f47982c = true;
    }

    @Override // qp.a
    public boolean a() {
        return this.f47982c;
    }

    @Override // qp.a
    public void b(f stepData) {
        Intrinsics.checkNotNullParameter(stepData, "stepData");
        this.f47981b.add(stepData);
        this.f47980a.h("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData", this.f47981b);
    }

    public ArrayList c() {
        return new ArrayList(this.f47981b);
    }
}
