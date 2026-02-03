package lp;

import androidx.lifecycle.b0;
import java.util.ArrayList;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements lp.a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f37519d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final b0 f37520a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f37521b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f37522c;

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
        this.f37520a = savedStateHandle;
        ArrayList arrayList = (ArrayList) savedStateHandle.b("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData");
        this.f37521b = arrayList == null ? new ArrayList() : arrayList;
        this.f37522c = true;
    }

    @Override // lp.a
    public boolean a() {
        return this.f37522c;
    }

    @Override // lp.a
    public void b(f stepData) {
        Intrinsics.checkNotNullParameter(stepData, "stepData");
        this.f37521b.add(stepData);
        this.f37520a.h("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData", this.f37521b);
    }

    public ArrayList c() {
        return new ArrayList(this.f37521b);
    }
}
