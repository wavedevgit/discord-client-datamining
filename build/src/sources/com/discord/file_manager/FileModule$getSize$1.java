package com.discord.file_manager;

import android.net.Uri;
import android.os.ParcelFileDescriptor;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import or.b;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.file_manager.FileModule$getSize$1", f = "FileModule.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nFileModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FileModule.kt\ncom/discord/file_manager/FileModule$getSize$1\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n*L\n1#1,320:1\n29#2:321\n*S KotlinDebug\n*F\n+ 1 FileModule.kt\ncom/discord/file_manager/FileModule$getSize$1\n*L\n161#1:321\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class FileModule$getSize$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Promise $promise;
    final /* synthetic */ String $uri;
    private /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ FileModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FileModule$getSize$1(FileModule fileModule, String str, Promise promise, Continuation<? super FileModule$getSize$1> continuation) {
        super(2, continuation);
        this.this$0 = fileModule;
        this.$uri = str;
        this.$promise = promise;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        FileModule$getSize$1 fileModule$getSize$1 = new FileModule$getSize$1(this.this$0, this.$uri, this.$promise, continuation);
        fileModule$getSize$1.L$0 = obj;
        return fileModule$getSize$1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object b10;
        ReactApplicationContext reactApplicationContext;
        long j10;
        b.f();
        if (this.label == 0) {
            c.b(obj);
            CoroutineScope coroutineScope = (CoroutineScope) this.L$0;
            FileModule fileModule = this.this$0;
            String str = this.$uri;
            Promise promise = this.$promise;
            try {
                Result.a aVar = Result.f33279e;
                reactApplicationContext = fileModule.getReactApplicationContext();
                ParcelFileDescriptor openFileDescriptor = reactApplicationContext.getContentResolver().openFileDescriptor(Uri.parse(str), "r");
                if (openFileDescriptor != null) {
                    j10 = openFileDescriptor.getStatSize();
                    tr.c.a(openFileDescriptor, null);
                } else {
                    j10 = 0;
                }
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f33279e;
                b10 = Result.b(c.a(th2));
            }
            if (j10 >= 0) {
                promise.resolve(kotlin.coroutines.jvm.internal.b.c(j10));
                b10 = Result.b(Unit.f33282a);
                Promise promise2 = this.$promise;
                Throwable e10 = Result.e(b10);
                if (e10 != null) {
                    promise2.reject(e10);
                }
                return Unit.f33282a;
            }
            throw new IllegalArgumentException("Failed requirement.");
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((FileModule$getSize$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
    }
}
