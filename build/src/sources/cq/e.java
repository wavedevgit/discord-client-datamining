package cq;

import androidx.lifecycle.b0;
import java.util.ArrayList;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements cq.a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f21002d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final b0 f21003a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f21004b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f21005c;

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
        this.f21003a = savedStateHandle;
        ArrayList arrayList = (ArrayList) savedStateHandle.b("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData");
        this.f21004b = arrayList == null ? new ArrayList() : arrayList;
        this.f21005c = true;
    }

    @Override // cq.a
    public boolean a() {
        return this.f21005c;
    }

    @Override // cq.a
    public void b(f stepData) {
        Intrinsics.checkNotNullParameter(stepData, "stepData");
        this.f21004b.add(stepData);
        this.f21003a.h("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData", this.f21004b);
    }

    public ArrayList c() {
        return new ArrayList(this.f21004b);
    }
}
