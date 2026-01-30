package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.widget.ProgressBar;
import com.discord.chat.databinding.FileAttachmentViewBinding;
import com.discord.file_downloader.DownloadState;
import com.discord.file_downloader.PublicFileDownloader;
import com.facebook.drawee.view.SimpleDraweeView;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.message.view.FileAttachmentView$setContent$2$1", f = "FileAttachmentView.kt", l = {96}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class FileAttachmentView$setContent$2$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $attachmentDescription;
    final /* synthetic */ String $attachmentName;
    final /* synthetic */ String $url;
    int label;
    final /* synthetic */ FileAttachmentView this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FileAttachmentView$setContent$2$1(FileAttachmentView fileAttachmentView, String str, String str2, String str3, Continuation<? super FileAttachmentView$setContent$2$1> continuation) {
        super(2, continuation);
        this.this$0 = fileAttachmentView;
        this.$url = str;
        this.$attachmentName = str2;
        this.$attachmentDescription = str3;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new FileAttachmentView$setContent$2$1(this.this$0, this.$url, this.$attachmentName, this.$attachmentDescription, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object f10 = or.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            PublicFileDownloader publicFileDownloader = PublicFileDownloader.INSTANCE;
            Context context = this.this$0.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            Flow downloadFile = publicFileDownloader.downloadFile(context, this.$url, this.$attachmentName, this.$attachmentDescription);
            final FileAttachmentView fileAttachmentView = this.this$0;
            FlowCollector flowCollector = new FlowCollector() { // from class: com.discord.chat.presentation.message.view.FileAttachmentView$setContent$2$1.1

                /* JADX INFO: Access modifiers changed from: package-private */
                @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
                @kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.message.view.FileAttachmentView$setContent$2$1$1$1", f = "FileAttachmentView.kt", l = {}, m = "invokeSuspend")
                @SourceDebugExtension({"SMAP\nFileAttachmentView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FileAttachmentView.kt\ncom/discord/chat/presentation/message/view/FileAttachmentView$setContent$2$1$1$1\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,142:1\n257#2,2:143\n257#2,2:145\n*S KotlinDebug\n*F\n+ 1 FileAttachmentView.kt\ncom/discord/chat/presentation/message/view/FileAttachmentView$setContent$2$1$1$1\n*L\n99#1:143,2\n100#1:145,2\n*E\n"})
                /* renamed from: com.discord.chat.presentation.message.view.FileAttachmentView$setContent$2$1$1$1  reason: invalid class name and collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                public static final class C01431 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
                    final /* synthetic */ DownloadState $downloadState;
                    int label;
                    final /* synthetic */ FileAttachmentView this$0;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    C01431(DownloadState downloadState, FileAttachmentView fileAttachmentView, Continuation<? super C01431> continuation) {
                        super(2, continuation);
                        this.$downloadState = downloadState;
                        this.this$0 = fileAttachmentView;
                    }

                    @Override // kotlin.coroutines.jvm.internal.a
                    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
                        return new C01431(this.$downloadState, this.this$0, continuation);
                    }

                    @Override // kotlin.coroutines.jvm.internal.a
                    public final Object invokeSuspend(Object obj) {
                        FileAttachmentViewBinding fileAttachmentViewBinding;
                        int i10;
                        FileAttachmentViewBinding fileAttachmentViewBinding2;
                        or.b.f();
                        if (this.label == 0) {
                            kotlin.c.b(obj);
                            boolean z10 = this.$downloadState instanceof DownloadState.InProgress;
                            fileAttachmentViewBinding = this.this$0.binding;
                            ProgressBar fileAttachmentDownloadProgressBar = fileAttachmentViewBinding.fileAttachmentDownloadProgressBar;
                            Intrinsics.checkNotNullExpressionValue(fileAttachmentDownloadProgressBar, "fileAttachmentDownloadProgressBar");
                            int i11 = 8;
                            if (z10) {
                                i10 = 0;
                            } else {
                                i10 = 8;
                            }
                            fileAttachmentDownloadProgressBar.setVisibility(i10);
                            fileAttachmentViewBinding2 = this.this$0.binding;
                            SimpleDraweeView fileAttachmentDownload = fileAttachmentViewBinding2.fileAttachmentDownload;
                            Intrinsics.checkNotNullExpressionValue(fileAttachmentDownload, "fileAttachmentDownload");
                            if (!z10) {
                                i11 = 0;
                            }
                            fileAttachmentDownload.setVisibility(i11);
                            return Unit.f33298a;
                        }
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }

                    @Override // kotlin.jvm.functions.Function2
                    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
                        return ((C01431) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
                    }
                }

                @Override // kotlinx.coroutines.flow.FlowCollector
                public /* bridge */ /* synthetic */ Object emit(Object obj2, Continuation continuation) {
                    return emit((DownloadState) obj2, (Continuation<? super Unit>) continuation);
                }

                public final Object emit(DownloadState downloadState, Continuation<? super Unit> continuation) {
                    Object g10 = gs.g.g(gs.m0.c(), new C01431(downloadState, FileAttachmentView.this, null), continuation);
                    return g10 == or.b.f() ? g10 : Unit.f33298a;
                }
            };
            this.label = 1;
            if (downloadFile.collect(flowCollector, this) == f10) {
                return f10;
            }
        }
        return Unit.f33298a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((FileAttachmentView$setContent$2$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
    }
}
