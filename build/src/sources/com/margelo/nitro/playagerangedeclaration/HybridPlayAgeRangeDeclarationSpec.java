package com.margelo.nitro.playagerangedeclaration;

import androidx.annotation.Keep;
import com.facebook.jni.HybridData;
import com.margelo.nitro.core.HybridObject;
import com.margelo.nitro.core.Promise;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Keep
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\b'\u0018\u0000 \u001b2\u00020\u0001:\u0001\u001cB\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0005\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b\u0005\u0010\u0006J\u0017\u0010\t\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0004H\u0014¢\u0006\u0004\b\t\u0010\nJ\u000f\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0004\b\f\u0010\rJ\u0015\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u000f0\u000eH'¢\u0006\u0004\b\u0010\u0010\u0011J1\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00160\u000e2\u0006\u0010\u0013\u001a\u00020\u00122\b\u0010\u0014\u001a\u0004\u0018\u00010\u00122\b\u0010\u0015\u001a\u0004\u0018\u00010\u0012H'¢\u0006\u0004\b\u0017\u0010\u0018R\u0016\u0010\u0019\u001a\u00020\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b\u0019\u0010\u001a¨\u0006\u001d"}, d2 = {"Lcom/margelo/nitro/playagerangedeclaration/HybridPlayAgeRangeDeclarationSpec;", "Lcom/margelo/nitro/core/HybridObject;", "<init>", "()V", "Lcom/facebook/jni/HybridData;", "initHybrid", "()Lcom/facebook/jni/HybridData;", "hybridData", "", "updateNative", "(Lcom/facebook/jni/HybridData;)V", "", "toString", "()Ljava/lang/String;", "Lcom/margelo/nitro/core/Promise;", "Lcom/margelo/nitro/playagerangedeclaration/PlayAgeRangeDeclarationResult;", "getPlayAgeRangeDeclaration", "()Lcom/margelo/nitro/core/Promise;", "", "firstThresholdAge", "secondThresholdAge", "thirdThresholdAge", "Lcom/margelo/nitro/playagerangedeclaration/DeclaredAgeRangeResult;", "requestDeclaredAgeRange", "(DLjava/lang/Double;Ljava/lang/Double;)Lcom/margelo/nitro/core/Promise;", "mHybridData", "Lcom/facebook/jni/HybridData;", "Companion", "a", "react-native-play-age-range-declaration_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class HybridPlayAgeRangeDeclarationSpec extends HybridObject {
    @NotNull
    public static final a Companion = new a(null);
    @NotNull
    protected static final String TAG = "HybridPlayAgeRangeDeclarationSpec";
    @fb.a
    @NotNull
    private HybridData mHybridData;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public HybridPlayAgeRangeDeclarationSpec() {
        HybridData initHybrid = initHybrid();
        this.mHybridData = initHybrid;
        super.updateNative(initHybrid);
    }

    private final native HybridData initHybrid();

    @Keep
    @fb.a
    @NotNull
    public abstract Promise<PlayAgeRangeDeclarationResult> getPlayAgeRangeDeclaration();

    @Keep
    @fb.a
    @NotNull
    public abstract Promise<DeclaredAgeRangeResult> requestDeclaredAgeRange(double d10, Double d11, Double d12);

    @Override // com.margelo.nitro.core.HybridObject
    @NotNull
    public String toString() {
        return "[HybridObject PlayAgeRangeDeclaration]";
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.margelo.nitro.core.HybridObject
    public void updateNative(@NotNull HybridData hybridData) {
        Intrinsics.checkNotNullParameter(hybridData, "hybridData");
        this.mHybridData = hybridData;
        super.updateNative(hybridData);
    }
}
