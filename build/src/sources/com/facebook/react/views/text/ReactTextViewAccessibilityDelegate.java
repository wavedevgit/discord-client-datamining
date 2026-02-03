package com.facebook.react.views.text;

import android.graphics.Rect;
import android.os.Bundle;
import android.text.Layout;
import android.text.Spanned;
import android.text.style.ClickableSpan;
import android.view.View;
import android.widget.TextView;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
import androidx.core.view.h0;
import com.facebook.react.R;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ReactAccessibilityDelegate;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.ReactClickableSpan;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000x\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010!\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0000\u0018\u0000 22\u00020\u0001:\u000223B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\u0018\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u00072\u0006\u0010\u000f\u001a\u00020\u0005H\u0014J\"\u0010\u0010\u001a\u00020\u00052\u0006\u0010\u000e\u001a\u00020\u00072\u0006\u0010\u0011\u001a\u00020\u00072\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013H\u0014J\u0018\u0010\u0014\u001a\u00020\r2\u000e\u0010\u0015\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u0016H\u0014J\u0018\u0010\u0017\u001a\u00020\u00072\u0006\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u0019H\u0014J\n\u0010\u001b\u001a\u0004\u0018\u00010\u001cH\u0002J5\u0010\u001d\u001a\u0004\u0018\u0001H\u001e\"\u0004\b\u0000\u0010\u001e2\u0006\u0010\u001f\u001a\u00020\u00072\u0006\u0010 \u001a\u00020\u00072\u000e\u0010!\u001a\n\u0012\u0004\u0012\u0002H\u001e\u0018\u00010\"H\u0004¢\u0006\u0002\u0010#J\n\u0010$\u001a\u0004\u0018\u00010%H\u0002J\u0018\u0010&\u001a\u00020\r2\u0006\u0010'\u001a\u00020\u00032\u0006\u0010(\u001a\u00020)H\u0016J\u0018\u0010*\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u00072\u0006\u0010+\u001a\u00020)H\u0014J\u0012\u0010,\u001a\u0004\u0018\u00010-2\u0006\u0010.\u001a\u00020/H\u0002J\u0012\u00100\u001a\u0004\u0018\u0001012\u0006\u0010'\u001a\u00020\u0003H\u0016R\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000¨\u00064"}, d2 = {"Lcom/facebook/react/views/text/ReactTextViewAccessibilityDelegate;", "Lcom/facebook/react/uimanager/ReactAccessibilityDelegate;", "view", "Landroid/view/View;", "originalFocus", "", "originalImportantForAccessibility", "", "<init>", "(Landroid/view/View;ZI)V", "accessibilityLinks", "Lcom/facebook/react/views/text/ReactTextViewAccessibilityDelegate$AccessibilityLinks;", "onVirtualViewKeyboardFocusChanged", "", "virtualViewId", "hasFocus", "onPerformActionForVirtualView", "action", "arguments", "Landroid/os/Bundle;", "getVisibleVirtualViews", "virtualViewIds", "", "getVirtualViewAt", "x", "", "y", "getLayoutFromHost", "Landroid/text/Layout;", "getFirstSpan", "T", ViewProps.START, ViewProps.END, "classType", "Ljava/lang/Class;", "(IILjava/lang/Class;)Ljava/lang/Object;", "getSpannedFromHost", "Landroid/text/Spanned;", "onInitializeAccessibilityNodeInfo", "host", "info", "Landroidx/core/view/accessibility/AccessibilityNodeInfoCompat;", "onPopulateNodeForVirtualView", "node", "getBoundsInParent", "Landroid/graphics/Rect;", "accessibleLink", "Lcom/facebook/react/views/text/ReactTextViewAccessibilityDelegate$AccessibilityLinks$AccessibleLink;", "getAccessibilityNodeProvider", "Landroidx/core/view/accessibility/AccessibilityNodeProviderCompat;", "Companion", "AccessibilityLinks", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactTextViewAccessibilityDelegate extends ReactAccessibilityDelegate {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private AccessibilityLinks accessibilityLinks;

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0006\u0018\u00002\u00020\u0001:\u0001\u0010B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\t\u001a\u0004\u0018\u00010\b2\u0006\u0010\n\u001a\u00020\u000bJ\u0018\u0010\f\u001a\u0004\u0018\u00010\b2\u0006\u0010\r\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\u000bJ\u0006\u0010\u000f\u001a\u00020\u000bR\u0014\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\b0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0011"}, d2 = {"Lcom/facebook/react/views/text/ReactTextViewAccessibilityDelegate$AccessibilityLinks;", "", "text", "Landroid/text/Spanned;", "<init>", "(Landroid/text/Spanned;)V", "links", "", "Lcom/facebook/react/views/text/ReactTextViewAccessibilityDelegate$AccessibilityLinks$AccessibleLink;", "getLinkById", StackTraceHelper.ID_KEY, "", "getLinkBySpanPos", ViewProps.START, ViewProps.END, "size", "AccessibleLink", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nReactTextViewAccessibilityDelegate.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactTextViewAccessibilityDelegate.kt\ncom/facebook/react/views/text/ReactTextViewAccessibilityDelegate$AccessibilityLinks\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,333:1\n6181#2,2:334\n*S KotlinDebug\n*F\n+ 1 ReactTextViewAccessibilityDelegate.kt\ncom/facebook/react/views/text/ReactTextViewAccessibilityDelegate$AccessibilityLinks\n*L\n281#1:334,2\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AccessibilityLinks {
        @NotNull
        private final List<AccessibleLink> links;

        @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u000b\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003R\u001c\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0006\u0010\u0007\"\u0004\b\b\u0010\tR\u001a\u0010\n\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\f\u0010\r\"\u0004\b\u000e\u0010\u000fR\u001a\u0010\u0010\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0011\u0010\r\"\u0004\b\u0012\u0010\u000fR\u001a\u0010\u0013\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0014\u0010\r\"\u0004\b\u0015\u0010\u000f¨\u0006\u0016"}, d2 = {"Lcom/facebook/react/views/text/ReactTextViewAccessibilityDelegate$AccessibilityLinks$AccessibleLink;", "", "<init>", "()V", "description", "", "getDescription", "()Ljava/lang/String;", "setDescription", "(Ljava/lang/String;)V", ViewProps.START, "", "getStart", "()I", "setStart", "(I)V", ViewProps.END, "getEnd", "setEnd", StackTraceHelper.ID_KEY, "getId", "setId", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class AccessibleLink {
            private String description;
            private int end;

            /* renamed from: id  reason: collision with root package name */
            private int f12022id;
            private int start;

            public final String getDescription() {
                return this.description;
            }

            public final int getEnd() {
                return this.end;
            }

            public final int getId() {
                return this.f12022id;
            }

            public final int getStart() {
                return this.start;
            }

            public final void setDescription(String str) {
                this.description = str;
            }

            public final void setEnd(int i10) {
                this.end = i10;
            }

            public final void setId(int i10) {
                this.f12022id = i10;
            }

            public final void setStart(int i10) {
                this.start = i10;
            }
        }

        public AccessibilityLinks(@NotNull final Spanned text) {
            Intrinsics.checkNotNullParameter(text, "text");
            ArrayList arrayList = new ArrayList();
            ClickableSpan[] clickableSpanArr = (ClickableSpan[]) text.getSpans(0, text.length(), ClickableSpan.class);
            Intrinsics.checkNotNull(clickableSpanArr);
            if (clickableSpanArr.length > 1) {
                i.F(clickableSpanArr, new Comparator() { // from class: com.facebook.react.views.text.ReactTextViewAccessibilityDelegate$AccessibilityLinks$special$$inlined$sortBy$1
                    @Override // java.util.Comparator
                    public final int compare(T t10, T t11) {
                        return mr.a.d(Integer.valueOf(text.getSpanStart((ClickableSpan) t10)), Integer.valueOf(text.getSpanStart((ClickableSpan) t11)));
                    }
                });
            }
            int length = clickableSpanArr.length;
            for (int i10 = 0; i10 < length; i10++) {
                ClickableSpan clickableSpan = clickableSpanArr[i10];
                int spanStart = text.getSpanStart(clickableSpan);
                int spanEnd = text.getSpanEnd(clickableSpan);
                if (spanStart != spanEnd && spanStart >= 0 && spanEnd >= 0 && spanStart <= text.length() && spanEnd <= text.length()) {
                    AccessibleLink accessibleLink = new AccessibleLink();
                    accessibleLink.setDescription(text.subSequence(spanStart, spanEnd).toString());
                    accessibleLink.setStart(spanStart);
                    accessibleLink.setEnd(spanEnd);
                    accessibleLink.setId(i10);
                    arrayList.add(accessibleLink);
                }
            }
            this.links = arrayList;
        }

        public final AccessibleLink getLinkById(int i10) {
            for (AccessibleLink accessibleLink : this.links) {
                if (accessibleLink.getId() == i10) {
                    return accessibleLink;
                }
            }
            return null;
        }

        public final AccessibleLink getLinkBySpanPos(int i10, int i11) {
            for (AccessibleLink accessibleLink : this.links) {
                if (accessibleLink.getStart() == i10 && accessibleLink.getEnd() == i11) {
                    return accessibleLink;
                }
            }
            return null;
        }

        public final int size() {
            return this.links.size();
        }
    }

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bJ\u001e\u0010\f\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b¨\u0006\r"}, d2 = {"Lcom/facebook/react/views/text/ReactTextViewAccessibilityDelegate$Companion;", "", "<init>", "()V", "setDelegate", "", "view", "Landroid/view/View;", "originalFocus", "", "originalImportantForAccessibility", "", "resetDelegate", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void resetDelegate(@NotNull View view, boolean z10, int i10) {
            Intrinsics.checkNotNullParameter(view, "view");
            h0.n0(view, new ReactTextViewAccessibilityDelegate(view, z10, i10));
        }

        public final void setDelegate(@NotNull View view, boolean z10, int i10) {
            Intrinsics.checkNotNullParameter(view, "view");
            if (!h0.N(view)) {
                if (view.getTag(R.id.accessibility_role) != null || view.getTag(R.id.accessibility_state) != null || view.getTag(R.id.accessibility_actions) != null || view.getTag(R.id.react_test_id) != null || view.getTag(R.id.accessibility_collection_item) != null || view.getTag(R.id.accessibility_links) != null || view.getTag(R.id.role) != null) {
                    h0.n0(view, new ReactTextViewAccessibilityDelegate(view, z10, i10));
                }
            }
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactTextViewAccessibilityDelegate(@NotNull View view, boolean z10, int i10) {
        super(view, z10, i10);
        Intrinsics.checkNotNullParameter(view, "view");
        this.accessibilityLinks = (AccessibilityLinks) getHostView().getTag(R.id.accessibility_links);
    }

    private final Rect getBoundsInParent(AccessibilityLinks.AccessibleLink accessibleLink) {
        boolean z10 = false;
        if (!(getHostView() instanceof TextView) && !(getHostView() instanceof PreparedLayoutTextView)) {
            return new Rect(0, 0, getHostView().getWidth(), getHostView().getHeight());
        }
        Layout layoutFromHost = getLayoutFromHost();
        if (layoutFromHost == null) {
            return new Rect(0, 0, getHostView().getWidth(), getHostView().getHeight());
        }
        int start = accessibleLink.getStart();
        int end = accessibleLink.getEnd();
        int lineForOffset = layoutFromHost.getLineForOffset(start);
        int lineEnd = layoutFromHost.getLineEnd(lineForOffset);
        int lineForOffset2 = layoutFromHost.getLineForOffset(end);
        int lineEnd2 = layoutFromHost.getLineEnd(lineForOffset2);
        if (start <= lineEnd && end <= lineEnd2) {
            Rect rect = new Rect();
            double primaryHorizontal = layoutFromHost.getPrimaryHorizontal(start);
            if (lineForOffset != lineForOffset2) {
                z10 = true;
            }
            layoutFromHost.getLineBounds(lineForOffset, rect);
            int scrollY = getHostView().getScrollY() + getHostView().getPaddingTop();
            rect.top += scrollY;
            rect.bottom += scrollY;
            rect.left = (int) (rect.left + ((primaryHorizontal + getHostView().getPaddingLeft()) - getHostView().getScrollX()));
            if (z10) {
                return new Rect(rect.left, rect.top, rect.right, rect.bottom);
            }
            return new Rect(rect.left, rect.top, (int) layoutFromHost.getPrimaryHorizontal(end), rect.bottom);
        }
        return null;
    }

    private final Layout getLayoutFromHost() {
        if (getHostView() instanceof PreparedLayoutTextView) {
            View hostView = getHostView();
            Intrinsics.checkNotNull(hostView, "null cannot be cast to non-null type com.facebook.react.views.text.PreparedLayoutTextView");
            PreparedLayout preparedLayout = ((PreparedLayoutTextView) hostView).getPreparedLayout();
            if (preparedLayout == null) {
                return null;
            }
            return preparedLayout.getLayout();
        } else if (!(getHostView() instanceof TextView)) {
            return null;
        } else {
            View hostView2 = getHostView();
            Intrinsics.checkNotNull(hostView2, "null cannot be cast to non-null type android.widget.TextView");
            return ((TextView) hostView2).getLayout();
        }
    }

    private final Spanned getSpannedFromHost() {
        CharSequence charSequence;
        Layout layout;
        View hostView = getHostView();
        if (hostView instanceof PreparedLayoutTextView) {
            PreparedLayout preparedLayout = ((PreparedLayoutTextView) hostView).getPreparedLayout();
            if (preparedLayout != null && (layout = preparedLayout.getLayout()) != null) {
                charSequence = layout.getText();
            } else {
                charSequence = null;
            }
            if (!(charSequence instanceof Spanned)) {
                return null;
            }
            return (Spanned) charSequence;
        }
        if (hostView instanceof TextView) {
            CharSequence text = ((TextView) hostView).getText();
            if (text instanceof Spanned) {
                return (Spanned) text;
            }
        }
        return null;
    }

    @Override // com.facebook.react.uimanager.ReactAccessibilityDelegate, androidx.customview.widget.ExploreByTouchHelper, androidx.core.view.a
    public AccessibilityNodeProviderCompat getAccessibilityNodeProvider(@NotNull View host) {
        Intrinsics.checkNotNullParameter(host, "host");
        if (this.accessibilityLinks != null) {
            return superGetAccessibilityNodeProvider(host);
        }
        return null;
    }

    protected final <T> T getFirstSpan(int i10, int i11, Class<T> cls) {
        boolean z10;
        Spanned spannedFromHost = getSpannedFromHost();
        if (spannedFromHost == null) {
            return null;
        }
        Object[] spans = spannedFromHost.getSpans(i10, i11, cls);
        Intrinsics.checkNotNull(spans);
        if (spans.length == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            return null;
        }
        return (T) spans[0];
    }

    @Override // com.facebook.react.uimanager.ReactAccessibilityDelegate, androidx.customview.widget.ExploreByTouchHelper
    protected int getVirtualViewAt(float f10, float f11) {
        Spanned spannedFromHost;
        AccessibilityLinks.AccessibleLink linkBySpanPos;
        AccessibilityLinks accessibilityLinks = this.accessibilityLinks;
        if (accessibilityLinks != null && accessibilityLinks.size() != 0 && ((getHostView() instanceof TextView) || (getHostView() instanceof PreparedLayoutTextView))) {
            float paddingLeft = f10 - getHostView().getPaddingLeft();
            float paddingTop = f11 - getHostView().getPaddingTop();
            float scrollX = paddingLeft + getHostView().getScrollX();
            float scrollY = paddingTop + getHostView().getScrollY();
            Layout layoutFromHost = getLayoutFromHost();
            if (layoutFromHost == null) {
                return Integer.MIN_VALUE;
            }
            int offsetForHorizontal = layoutFromHost.getOffsetForHorizontal(layoutFromHost.getLineForVertical((int) scrollY), scrollX);
            ClickableSpan clickableSpan = (ClickableSpan) getFirstSpan(offsetForHorizontal, offsetForHorizontal, ClickableSpan.class);
            if (clickableSpan != null && (spannedFromHost = getSpannedFromHost()) != null && (linkBySpanPos = accessibilityLinks.getLinkBySpanPos(spannedFromHost.getSpanStart(clickableSpan), spannedFromHost.getSpanEnd(clickableSpan))) != null) {
                return linkBySpanPos.getId();
            }
        }
        return Integer.MIN_VALUE;
    }

    @Override // com.facebook.react.uimanager.ReactAccessibilityDelegate, androidx.customview.widget.ExploreByTouchHelper
    protected void getVisibleVirtualViews(@NotNull List<Integer> virtualViewIds) {
        Intrinsics.checkNotNullParameter(virtualViewIds, "virtualViewIds");
        AccessibilityLinks accessibilityLinks = this.accessibilityLinks;
        if (accessibilityLinks != null) {
            int size = accessibilityLinks.size();
            for (int i10 = 0; i10 < size; i10++) {
                virtualViewIds.add(Integer.valueOf(i10));
            }
        }
    }

    @Override // com.facebook.react.uimanager.ReactAccessibilityDelegate, androidx.customview.widget.ExploreByTouchHelper, androidx.core.view.a
    public void onInitializeAccessibilityNodeInfo(@NotNull View host, @NotNull AccessibilityNodeInfoCompat info) {
        Intrinsics.checkNotNullParameter(host, "host");
        Intrinsics.checkNotNullParameter(info, "info");
        super.onInitializeAccessibilityNodeInfo(host, info);
        if (host instanceof PreparedLayoutTextView) {
            info.b1(((PreparedLayoutTextView) host).getText());
        }
    }

    @Override // com.facebook.react.uimanager.ReactAccessibilityDelegate, androidx.customview.widget.ExploreByTouchHelper
    protected boolean onPerformActionForVirtualView(int i10, int i11, Bundle bundle) {
        AccessibilityLinks.AccessibleLink linkById;
        ClickableSpan clickableSpan;
        AccessibilityLinks accessibilityLinks = this.accessibilityLinks;
        if (accessibilityLinks == null || accessibilityLinks == null || (linkById = accessibilityLinks.getLinkById(i10)) == null || (clickableSpan = (ClickableSpan) getFirstSpan(linkById.getStart(), linkById.getEnd(), ClickableSpan.class)) == null || i11 != 16) {
            return false;
        }
        clickableSpan.onClick(getHostView());
        return true;
    }

    @Override // com.facebook.react.uimanager.ReactAccessibilityDelegate, androidx.customview.widget.ExploreByTouchHelper
    protected void onPopulateNodeForVirtualView(int i10, @NotNull AccessibilityNodeInfoCompat node) {
        Intrinsics.checkNotNullParameter(node, "node");
        AccessibilityLinks accessibilityLinks = this.accessibilityLinks;
        if (accessibilityLinks == null) {
            node.A0("");
            node.s0(new Rect(0, 0, 1, 1));
            return;
        }
        AccessibilityLinks.AccessibleLink linkById = accessibilityLinks.getLinkById(i10);
        if (linkById == null) {
            node.A0("");
            node.s0(new Rect(0, 0, 1, 1));
            return;
        }
        Rect boundsInParent = getBoundsInParent(linkById);
        if (boundsInParent == null) {
            node.A0("");
            node.s0(new Rect(0, 0, 1, 1));
            return;
        }
        node.A0(linkById.getDescription());
        node.a(16);
        node.s0(boundsInParent);
        node.T0(getHostView().getResources().getString(R.string.link_description));
        node.w0(ReactAccessibilityDelegate.AccessibilityRole.getValue(ReactAccessibilityDelegate.AccessibilityRole.BUTTON));
    }

    @Override // androidx.customview.widget.ExploreByTouchHelper
    protected void onVirtualViewKeyboardFocusChanged(int i10, boolean z10) {
        AccessibilityLinks.AccessibleLink linkById;
        ClickableSpan clickableSpan;
        AccessibilityLinks accessibilityLinks = this.accessibilityLinks;
        if (accessibilityLinks != null && accessibilityLinks != null && (linkById = accessibilityLinks.getLinkById(i10)) != null && (clickableSpan = (ClickableSpan) getFirstSpan(linkById.getStart(), linkById.getEnd(), ClickableSpan.class)) != null) {
            if ((clickableSpan instanceof ReactClickableSpan) && (getHostView() instanceof TextView)) {
                ReactClickableSpan reactClickableSpan = (ReactClickableSpan) clickableSpan;
                reactClickableSpan.setKeyboardFocused(z10);
                View hostView = getHostView();
                Intrinsics.checkNotNull(hostView, "null cannot be cast to non-null type android.widget.TextView");
                reactClickableSpan.setFocusBgColor(((TextView) hostView).getHighlightColor());
                getHostView().invalidate();
            } else if (getHostView() instanceof PreparedLayoutTextView) {
                if (z10) {
                    View hostView2 = getHostView();
                    Intrinsics.checkNotNull(hostView2, "null cannot be cast to non-null type com.facebook.react.views.text.PreparedLayoutTextView");
                    ((PreparedLayoutTextView) hostView2).setSelection(linkById.getStart(), linkById.getEnd());
                    return;
                }
                View hostView3 = getHostView();
                Intrinsics.checkNotNull(hostView3, "null cannot be cast to non-null type com.facebook.react.views.text.PreparedLayoutTextView");
                ((PreparedLayoutTextView) hostView3).clearSelection();
            }
        }
    }
}
