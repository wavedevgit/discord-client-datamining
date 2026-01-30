package com.discord.emoji;

import android.content.Context;
import android.net.Uri;
import com.discord.emoji.RenderableEmoji;
import com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
import com.facebook.drawee.span.DraweeSpanStringBuilder;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\u0004\u001aW\u0010\u000f\u001a\u00020\r2\u0006\u0010\u0001\u001a\u00020\u00002\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u0005\u001a\u00020\u00042\b\b\u0001\u0010\u0007\u001a\u00020\u00062\u0006\u0010\t\u001a\u00020\b2\b\b\u0002\u0010\n\u001a\u00020\u00062\u0014\b\u0002\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000b¢\u0006\u0004\b\u000f\u0010\u0010\u001aO\u0010\u0011\u001a\u00020\u00002\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u0005\u001a\u00020\u00042\b\b\u0001\u0010\u0007\u001a\u00020\u00062\u0006\u0010\t\u001a\u00020\b2\b\b\u0002\u0010\n\u001a\u00020\u00062\u0014\b\u0002\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000b¢\u0006\u0004\b\u0011\u0010\u0012\u001aa\u0010\u000f\u001a\u00020\r2\u0006\u0010\u0001\u001a\u00020\u00002\u0006\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0015\u001a\u00020\u00132\u0006\u0010\u0005\u001a\u00020\u00042\b\b\u0001\u0010\u0007\u001a\u00020\u00062\u0006\u0010\t\u001a\u00020\b2\b\b\u0002\u0010\n\u001a\u00020\u00062\u0014\b\u0002\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000bH\u0002¢\u0006\u0004\b\u000f\u0010\u0016¨\u0006\u0017"}, d2 = {"Lcom/facebook/drawee/span/DraweeSpanStringBuilder;", "builder", "Lcom/discord/emoji/RenderableEmoji;", "emoji", "Landroid/content/Context;", "context", "", "sizePx", "", "allowAnimation", "verticalAlignment", "Lkotlin/Function1;", "Lcom/facebook/drawee/generic/GenericDraweeHierarchyBuilder;", "", "additionalBuilderActions", "renderEmojiInto", "(Lcom/facebook/drawee/span/DraweeSpanStringBuilder;Lcom/discord/emoji/RenderableEmoji;Landroid/content/Context;IZILkotlin/jvm/functions/Function1;)V", "renderEmoji", "(Lcom/discord/emoji/RenderableEmoji;Landroid/content/Context;IZILkotlin/jvm/functions/Function1;)Lcom/facebook/drawee/span/DraweeSpanStringBuilder;", "", "src", "contentDescription", "(Lcom/facebook/drawee/span/DraweeSpanStringBuilder;Ljava/lang/String;Ljava/lang/String;Landroid/content/Context;IZILkotlin/jvm/functions/Function1;)V", "emoji_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nRenderableEmoji.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RenderableEmoji.kt\ncom/discord/emoji/RenderableEmojiKt\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,151:1\n1#2:152\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RenderableEmojiKt {
    @NotNull
    public static final DraweeSpanStringBuilder renderEmoji(@NotNull RenderableEmoji emoji, @NotNull Context context, int i10, boolean z10, int i11, @NotNull Function1<? super GenericDraweeHierarchyBuilder, Unit> additionalBuilderActions) {
        Intrinsics.checkNotNullParameter(emoji, "emoji");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(additionalBuilderActions, "additionalBuilderActions");
        DraweeSpanStringBuilder draweeSpanStringBuilder = new DraweeSpanStringBuilder();
        renderEmojiInto(draweeSpanStringBuilder, emoji, context, i10, z10, i11, additionalBuilderActions);
        return draweeSpanStringBuilder;
    }

    public static /* synthetic */ DraweeSpanStringBuilder renderEmoji$default(RenderableEmoji renderableEmoji, Context context, int i10, boolean z10, int i11, Function1 function1, int i12, Object obj) {
        if ((i12 & 16) != 0) {
            i11 = 2;
        }
        int i13 = i11;
        if ((i12 & 32) != 0) {
            function1 = new Function1() { // from class: com.discord.emoji.a
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit renderEmoji$lambda$2;
                    renderEmoji$lambda$2 = RenderableEmojiKt.renderEmoji$lambda$2((GenericDraweeHierarchyBuilder) obj2);
                    return renderEmoji$lambda$2;
                }
            };
        }
        return renderEmoji(renderableEmoji, context, i10, z10, i13, function1);
    }

    public static final Unit renderEmoji$lambda$2(GenericDraweeHierarchyBuilder genericDraweeHierarchyBuilder) {
        Intrinsics.checkNotNullParameter(genericDraweeHierarchyBuilder, "<this>");
        return Unit.f33298a;
    }

    public static final void renderEmojiInto(@NotNull DraweeSpanStringBuilder builder, @NotNull RenderableEmoji emoji, @NotNull Context context, int i10, boolean z10, int i11, @NotNull Function1<? super GenericDraweeHierarchyBuilder, Unit> additionalBuilderActions) {
        String exception;
        Intrinsics.checkNotNullParameter(builder, "builder");
        Intrinsics.checkNotNullParameter(emoji, "emoji");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(additionalBuilderActions, "additionalBuilderActions");
        RenderableEmoji.Unicode unicode = emoji instanceof RenderableEmoji.Unicode ? (RenderableEmoji.Unicode) emoji : null;
        if (unicode == null || (exception = unicode.getException()) == null || builder.append((CharSequence) exception) == null) {
            renderEmojiInto(builder, emoji.getUrl(z10, i10), emoji.getContentDescription(), context, i10, z10, i11, additionalBuilderActions);
            Unit unit = Unit.f33298a;
        }
    }

    public static /* synthetic */ void renderEmojiInto$default(DraweeSpanStringBuilder draweeSpanStringBuilder, RenderableEmoji renderableEmoji, Context context, int i10, boolean z10, int i11, Function1 function1, int i12, Object obj) {
        if ((i12 & 32) != 0) {
            i11 = 2;
        }
        int i13 = i11;
        if ((i12 & 64) != 0) {
            function1 = new Function1() { // from class: com.discord.emoji.b
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit renderEmojiInto$lambda$0;
                    renderEmojiInto$lambda$0 = RenderableEmojiKt.renderEmojiInto$lambda$0((GenericDraweeHierarchyBuilder) obj2);
                    return renderEmojiInto$lambda$0;
                }
            };
        }
        renderEmojiInto(draweeSpanStringBuilder, renderableEmoji, context, i10, z10, i13, function1);
    }

    public static final Unit renderEmojiInto$lambda$0(GenericDraweeHierarchyBuilder genericDraweeHierarchyBuilder) {
        Intrinsics.checkNotNullParameter(genericDraweeHierarchyBuilder, "<this>");
        return Unit.f33298a;
    }

    public static final Unit renderEmojiInto$lambda$4(GenericDraweeHierarchyBuilder genericDraweeHierarchyBuilder) {
        Intrinsics.checkNotNullParameter(genericDraweeHierarchyBuilder, "<this>");
        return Unit.f33298a;
    }

    public static final void renderEmojiInto(DraweeSpanStringBuilder draweeSpanStringBuilder, String str, String str2, Context context, int i10, boolean z10, int i11, Function1<? super GenericDraweeHierarchyBuilder, Unit> function1) {
        int length = draweeSpanStringBuilder.length();
        draweeSpanStringBuilder.append((char) 8203);
        com.facebook.drawee.controller.a build = ((PipelineDraweeControllerBuilder) ((PipelineDraweeControllerBuilder) ((PipelineDraweeControllerBuilder) e9.d.g().A(z10)).E(ImageRequestBuilder.x(Uri.parse(str)).N(new ResizeOptions(i10, i10, 0.0f, 0.0f, 12, null)).I(ImageRequest.RequestLevel.FULL_FETCH).a())).C(str2)).build();
        GenericDraweeHierarchyBuilder w10 = GenericDraweeHierarchyBuilder.u(context.getResources()).w(ScalingUtils$ScaleType.f11037e);
        function1.invoke(w10);
        draweeSpanStringBuilder.j(context, w10.a(), build, length, i10, i10, false, i11);
    }
}
