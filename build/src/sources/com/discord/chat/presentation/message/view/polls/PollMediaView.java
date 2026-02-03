package com.discord.chat.presentation.message.view.polls;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Point;
import android.util.AttributeSet;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ImageView;
import com.discord.chat.R;
import com.discord.chat.bridge.attachment.Attachment;
import com.discord.chat.bridge.polls.PollAnswer;
import com.discord.chat.bridge.polls.PollMedia;
import com.discord.chat.bridge.polls.PollMediaEmoji;
import com.discord.chat.presentation.message.messagepart.polls.PollAnswerAccessory;
import com.discord.chat.presentation.message.messagepart.polls.PollAnswerAccessoryKt;
import com.discord.chat.reactevents.ViewResizeMode;
import com.discord.emoji.RenderableEmoji;
import com.discord.emoji.RenderableEmojiKt;
import com.discord.image.fresco.SetOptionalImageUrlKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewLocationUtilsKt;
import com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
import com.facebook.drawee.span.DraweeSpanStringBuilder;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import java.util.ArrayList;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function6;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000x\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 82\u00020\u0001:\u00018B\u001d\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J'\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\fH\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u0017\u0010\u0013\u001a\u00020\u000e2\u0006\u0010\u0012\u001a\u00020\u0011H\u0002¢\u0006\u0004\b\u0013\u0010\u0014J\u000f\u0010\u0015\u001a\u00020\u000eH\u0002¢\u0006\u0004\b\u0015\u0010\u0016JU\u0010\u001f\u001a\u00020\u000e2\u0006\u0010\u0018\u001a\u00020\u00172\f\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u000e0\u001920\u0010\u001e\u001a,\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\u000e0\u001b¢\u0006\u0004\b\u001f\u0010 R\u001a\u0010#\u001a\b\u0012\u0004\u0012\u00020\"0!8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010$R\u001c\u0010'\u001a\n &*\u0004\u0018\u00010%0%8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010(R\u0016\u0010)\u001a\u00020\u001c8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b)\u0010*R\u0018\u0010+\u001a\u0004\u0018\u00010\u00178\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b+\u0010,R\u001b\u00102\u001a\u00020-8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b.\u0010/\u001a\u0004\b0\u00101R\u001b\u00107\u001a\u0002038BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b4\u0010/\u001a\u0004\b5\u00106¨\u00069"}, d2 = {"Lcom/discord/chat/presentation/message/view/polls/PollMediaView;", "Landroid/widget/FrameLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "url", "Landroid/widget/ImageView$ScaleType;", "scaleType", "", "autoPlayAnimations", "", "setImageURL", "(Ljava/lang/String;Landroid/widget/ImageView$ScaleType;Z)V", "Lcom/facebook/drawee/span/DraweeSpanStringBuilder;", "spanBuilder", "setDraweeSpanStringBuilder", "(Lcom/facebook/drawee/span/DraweeSpanStringBuilder;)V", "hideViews", "()V", "Lcom/discord/chat/presentation/message/messagepart/polls/PollAnswerAccessory;", "accessory", "Lkotlin/Function0;", "onTapAnswer", "Lkotlin/Function6;", "", "Lcom/discord/chat/reactevents/ViewResizeMode;", "onLongPressImage", "setMedia", "(Lcom/discord/chat/presentation/message/messagepart/polls/PollAnswerAccessory;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function6;)V", "", "Landroid/view/View;", "childViews", "Ljava/util/List;", "Lcom/facebook/drawee/generic/GenericDraweeHierarchyBuilder;", "kotlin.jvm.PlatformType", "hierarchyBuilder", "Lcom/facebook/drawee/generic/GenericDraweeHierarchyBuilder;", "emojiSize", "I", "lastMedia", "Lcom/discord/chat/presentation/message/messagepart/polls/PollAnswerAccessory;", "Lcom/facebook/drawee/view/SimpleDraweeView;", "draweeView$delegate", "Lkotlin/Lazy;", "getDraweeView", "()Lcom/facebook/drawee/view/SimpleDraweeView;", "draweeView", "Lcom/facebook/drawee/span/SimpleDraweeSpanTextView;", "textView$delegate", "getTextView", "()Lcom/facebook/drawee/span/SimpleDraweeSpanTextView;", "textView", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nPollMediaView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 PollMediaView.kt\ncom/discord/chat/presentation/message/view/polls/PollMediaView\n+ 2 Context.kt\nandroidx/core/content/ContextKt\n+ 3 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,169:1\n51#2,9:170\n257#3,2:179\n257#3,2:181\n257#3,2:183\n*S KotlinDebug\n*F\n+ 1 PollMediaView.kt\ncom/discord/chat/presentation/message/view/polls/PollMediaView\n*L\n38#1:170,9\n137#1:179,2\n154#1:181,2\n161#1:183,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollMediaView extends FrameLayout {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int DEFAULT_EMOJI_SIZE = SizeUtilsKt.getDpToPx(24);
    @NotNull
    private final List<View> childViews;
    @NotNull
    private final Lazy draweeView$delegate;
    private int emojiSize;
    private final GenericDraweeHierarchyBuilder hierarchyBuilder;
    private PollAnswerAccessory lastMedia;
    @NotNull
    private final Lazy textView$delegate;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/chat/presentation/message/view/polls/PollMediaView$Companion;", "", "<init>", "()V", "DEFAULT_EMOJI_SIZE", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public PollMediaView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SimpleDraweeView draweeView_delegate$lambda$2(Context context, PollMediaView pollMediaView) {
        SimpleDraweeView simpleDraweeView = new SimpleDraweeView(context);
        simpleDraweeView.setHierarchy(pollMediaView.hierarchyBuilder.a());
        pollMediaView.childViews.add(simpleDraweeView);
        pollMediaView.addView(simpleDraweeView, new FrameLayout.LayoutParams(-1, -1, 17));
        return simpleDraweeView;
    }

    private final SimpleDraweeView getDraweeView() {
        return (SimpleDraweeView) this.draweeView$delegate.getValue();
    }

    private final SimpleDraweeSpanTextView getTextView() {
        return (SimpleDraweeSpanTextView) this.textView$delegate.getValue();
    }

    private final void hideViews() {
        for (View view : this.childViews) {
            view.setVisibility(8);
        }
    }

    private final void setDraweeSpanStringBuilder(DraweeSpanStringBuilder draweeSpanStringBuilder) {
        hideViews();
        SimpleDraweeSpanTextView textView = getTextView();
        textView.setVisibility(0);
        textView.setDraweeSpanStringBuilder(draweeSpanStringBuilder);
    }

    private final void setImageURL(String str, ImageView.ScaleType scaleType, boolean z10) {
        hideViews();
        getDraweeView().setScaleType(scaleType);
        SetOptionalImageUrlKt.setOptionalImageUrl$default(getDraweeView(), str, Boolean.valueOf(z10), null, null, 12, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean setMedia$lambda$6(PollMediaView pollMediaView, Function6 function6, Attachment attachment, View view) {
        Point locationInWindow = ViewLocationUtilsKt.getLocationInWindow(pollMediaView);
        function6.invoke(attachment.getId(), Integer.valueOf(pollMediaView.getWidth()), Integer.valueOf(pollMediaView.getHeight()), Integer.valueOf(locationInWindow.x), Integer.valueOf(locationInWindow.y), ViewResizeMode.Cover);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SimpleDraweeSpanTextView textView_delegate$lambda$4(Context context, PollMediaView pollMediaView) {
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = new SimpleDraweeSpanTextView(context);
        pollMediaView.childViews.add(simpleDraweeSpanTextView);
        pollMediaView.addView(simpleDraweeSpanTextView, new FrameLayout.LayoutParams(-2, -2, 17));
        return simpleDraweeSpanTextView;
    }

    public final void setMedia(@NotNull PollAnswerAccessory accessory, @NotNull final Function0<Unit> onTapAnswer, @NotNull final Function6 onLongPressImage) {
        PollMedia pollMedia;
        boolean z10;
        PollAnswer answer;
        Intrinsics.checkNotNullParameter(accessory, "accessory");
        Intrinsics.checkNotNullParameter(onTapAnswer, "onTapAnswer");
        Intrinsics.checkNotNullParameter(onLongPressImage, "onLongPressImage");
        PollAnswerAccessory pollAnswerAccessory = this.lastMedia;
        if (pollAnswerAccessory != null && (answer = pollAnswerAccessory.getAnswer()) != null) {
            pollMedia = answer.getPollMedia();
        } else {
            pollMedia = null;
        }
        if (Intrinsics.areEqual(pollMedia, accessory.getAnswer().getPollMedia())) {
            return;
        }
        this.lastMedia = accessory;
        final Attachment firstImage = PollAnswerAccessoryKt.getFirstImage(accessory.getAttachments());
        setOnClickListener(null);
        setOnLongClickListener(null);
        int i10 = 0;
        boolean z11 = true;
        if (firstImage != null) {
            setImageURL(firstImage.getUrl(), ImageView.ScaleType.CENTER_CROP, accessory.getShouldAutoPlayGifs());
            if (firstImage.getId() != null) {
                setOnClickListener(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.polls.m
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        Function0.this.invoke();
                    }
                });
                setOnLongClickListener(new View.OnLongClickListener() { // from class: com.discord.chat.presentation.message.view.polls.n
                    @Override // android.view.View.OnLongClickListener
                    public final boolean onLongClick(View view) {
                        boolean media$lambda$6;
                        media$lambda$6 = PollMediaView.setMedia$lambda$6(PollMediaView.this, onLongPressImage, firstImage, view);
                        return media$lambda$6;
                    }
                });
            }
        } else if (accessory.getAnswer().getPollMedia().getEmoji() != null) {
            PollMediaEmoji emoji = accessory.getAnswer().getPollMedia().getEmoji();
            RenderableEmoji renderable = emoji.renderable();
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            int i11 = this.emojiSize;
            if (accessory.getShouldAnimateEmoji() && emoji.getAnimated()) {
                z10 = true;
            } else {
                z10 = false;
            }
            setDraweeSpanStringBuilder(RenderableEmojiKt.renderEmoji$default(renderable, context, i11, z10, 0, null, 48, null));
            setImportantForAccessibility(2);
            setOnClickListener(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.polls.o
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    Function0.this.invoke();
                }
            });
        } else {
            hideViews();
            z11 = false;
        }
        if (!z11) {
            i10 = 8;
        }
        setVisibility(i10);
    }

    public /* synthetic */ PollMediaView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public PollMediaView(@NotNull final Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        this.childViews = new ArrayList();
        this.hierarchyBuilder = l9.a.d(context, attributeSet);
        this.emojiSize = DEFAULT_EMOJI_SIZE;
        int[] PollMediaView = R.styleable.PollMediaView;
        Intrinsics.checkNotNullExpressionValue(PollMediaView, "PollMediaView");
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, PollMediaView, 0, 0);
        this.emojiSize = obtainStyledAttributes.getDimensionPixelSize(R.styleable.PollMediaView_emojiSize, this.emojiSize);
        obtainStyledAttributes.recycle();
        this.draweeView$delegate = lr.l.a(new Function0() { // from class: com.discord.chat.presentation.message.view.polls.k
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SimpleDraweeView draweeView_delegate$lambda$2;
                draweeView_delegate$lambda$2 = PollMediaView.draweeView_delegate$lambda$2(context, this);
                return draweeView_delegate$lambda$2;
            }
        });
        this.textView$delegate = lr.l.a(new Function0() { // from class: com.discord.chat.presentation.message.view.polls.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SimpleDraweeSpanTextView textView_delegate$lambda$4;
                textView_delegate$lambda$4 = PollMediaView.textView_delegate$lambda$4(context, this);
                return textView_delegate$lambda$4;
            }
        });
    }
}
