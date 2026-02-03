package com.discord.fastest_list.react;

import android.graphics.RectF;
import com.discord.fastest_list.android.FastestListView;
import com.discord.misc.utilities.measure.ViewMeasureExtensionsKt;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import java.util.HashMap;
import java.util.Map;
import jr.p;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010\u0001\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0000\u0018\u0000 \u00182\u00020\u0001:\u0001\u0018B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0016J\u0018\u0010\u000e\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\r2\u0006\u0010\u0007\u001a\u00020\u0010H\u0016J\u0018\u0010\u0011\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\r2\u0006\u0010\u0007\u001a\u00020\u0010H\u0016J\u0018\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u000f\u001a\u00020\r2\u0006\u0010\u0014\u001a\u00020\u0010H\u0016J\u0010\u0010\u0015\u001a\u00020\u000b2\u0006\u0010\u0016\u001a\u00020\u0017H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\bX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0019"}, d2 = {"Lcom/discord/fastest_list/react/FastestListShadowNode;", "Lcom/facebook/react/uimanager/LayoutShadowNode;", "<init>", "()V", "isDirty", "", "nextUpdateNeedsMeasureAndLayout", ViewProps.PADDING, "Landroid/graphics/RectF;", "paddingPrev", "setReactTag", "", "reactTag", "", "setPadding", "spacingType", "", "setDefaultPadding", "setPaddingPercent", "", "percent", "flushChanges", "view", "Lcom/discord/fastest_list/android/FastestListView;", "Companion", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FastestListShadowNode extends LayoutShadowNode {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Map<Integer, FastestListShadowNode> activeShadowNodes = new HashMap();
    private boolean isDirty;
    private boolean nextUpdateNeedsMeasureAndLayout;
    @NotNull
    private RectF padding = new RectF(0.0f, 0.0f, 0.0f, 0.0f);
    @NotNull
    private RectF paddingPrev = new RectF(0.0f, 0.0f, 0.0f, 0.0f);

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010%\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\n\u0010\b\u001a\u00020\t*\u00020\nJ\n\u0010\u000b\u001a\u00020\t*\u00020\nR\u001a\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\f"}, d2 = {"Lcom/discord/fastest_list/react/FastestListShadowNode$Companion;", "", "<init>", "()V", "activeShadowNodes", "", "", "Lcom/discord/fastest_list/react/FastestListShadowNode;", "updateFromShadowNode", "", "Lcom/discord/fastest_list/android/FastestListView;", "dropShadowNode", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void dropShadowNode(@NotNull FastestListView fastestListView) {
            Intrinsics.checkNotNullParameter(fastestListView, "<this>");
            FastestListShadowNode.activeShadowNodes.remove(Integer.valueOf(fastestListView.getId()));
        }

        public final void updateFromShadowNode(@NotNull FastestListView fastestListView) {
            Intrinsics.checkNotNullParameter(fastestListView, "<this>");
            FastestListShadowNode fastestListShadowNode = (FastestListShadowNode) FastestListShadowNode.activeShadowNodes.get(Integer.valueOf(fastestListView.getId()));
            if (fastestListShadowNode != null) {
                fastestListShadowNode.flushChanges(fastestListView);
            }
        }

        private Companion() {
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[com.facebook.yoga.e.values().length];
            try {
                iArr[com.facebook.yoga.e.HORIZONTAL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[com.facebook.yoga.e.VERTICAL.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[com.facebook.yoga.e.ALL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[com.facebook.yoga.e.LEFT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[com.facebook.yoga.e.TOP.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[com.facebook.yoga.e.RIGHT.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[com.facebook.yoga.e.BOTTOM.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[com.facebook.yoga.e.START.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[com.facebook.yoga.e.END.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void flushChanges(FastestListView fastestListView) {
        if (!this.isDirty) {
            return;
        }
        RectF rectF = this.padding;
        fastestListView.setPadding((int) rectF.left, (int) rectF.top, (int) rectF.right, (int) rectF.bottom);
        if (!this.nextUpdateNeedsMeasureAndLayout) {
            this.nextUpdateNeedsMeasureAndLayout = true;
        } else {
            ViewMeasureExtensionsKt.measureAndLayout(fastestListView);
        }
        this.isDirty = false;
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void setDefaultPadding(int i10, float f10) {
        String simpleName = FastestListShadowNode.class.getSimpleName();
        throw new IllegalStateException((simpleName + " does not support default padding").toString());
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void setPadding(int i10, float f10) {
        int i11;
        super.setPadding(i10, f10);
        com.facebook.yoga.e d10 = com.facebook.yoga.e.d(i10);
        if (d10 == null) {
            i11 = -1;
        } else {
            i11 = WhenMappings.$EnumSwitchMapping$0[d10.ordinal()];
        }
        switch (i11) {
            case -1:
                throw new IllegalStateException(("Unknown spacing type " + i10).toString());
            case 0:
            default:
                throw new p();
            case 1:
                RectF rectF = this.padding;
                rectF.left = f10;
                rectF.right = f10;
                break;
            case 2:
                RectF rectF2 = this.padding;
                rectF2.top = f10;
                rectF2.bottom = f10;
                break;
            case 3:
                this.padding.set(f10, f10, f10, f10);
                break;
            case 4:
                this.padding.left = f10;
                break;
            case 5:
                this.padding.top = f10;
                break;
            case 6:
                this.padding.right = f10;
                break;
            case 7:
                this.padding.bottom = f10;
                break;
            case 8:
                this.padding.left = f10;
                break;
            case 9:
                this.padding.right = f10;
                break;
        }
        if (!Intrinsics.areEqual(this.paddingPrev, this.padding)) {
            this.paddingPrev.set(this.padding);
            this.isDirty = true;
        }
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void setReactTag(int i10) {
        super.setReactTag(i10);
        activeShadowNodes.put(Integer.valueOf(i10), this);
    }

    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    @NotNull
    /* renamed from: setPaddingPercent */
    public Void mo912setPaddingPercent(int i10, float f10) {
        String simpleName = FastestListShadowNode.class.getSimpleName();
        throw new IllegalStateException((simpleName + " does not support percentage based padding").toString());
    }
}
