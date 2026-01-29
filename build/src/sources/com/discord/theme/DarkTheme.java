package com.discord.theme;

import android.content.res.Resources;
import com.discord.theme.DarkTheme;
import com.discord.theme.utils.ColorUtilsKt;
import ir.l;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000!\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0003\b\u0090\u0002\b\u0000\u0018\u00002\u00020\u0001B\u001b\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\u0010\u0004\u001a\u00060\u0005R\u00020\u0003¢\u0006\u0004\b\u0006\u0010\u0007J\u0018\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\t2\u0006\u0010\u000b\u001a\u00020\tH\u0016J\u0018\u0010\f\u001a\u00020\t2\u0006\u0010\r\u001a\u00020\t2\u0006\u0010\u000e\u001a\u00020\tH\u0016R\u001b\u0010\u000f\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u0012\u0010\u0013\u001a\u0004\b\u0010\u0010\u0011R\u001b\u0010\u0014\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u0016\u0010\u0013\u001a\u0004\b\u0015\u0010\u0011R\u001b\u0010\u0017\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u0019\u0010\u0013\u001a\u0004\b\u0018\u0010\u0011R\u001b\u0010\u001a\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u001c\u0010\u0013\u001a\u0004\b\u001b\u0010\u0011R\u001b\u0010\u001d\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u001f\u0010\u0013\u001a\u0004\b\u001e\u0010\u0011R\u001b\u0010 \u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\"\u0010\u0013\u001a\u0004\b!\u0010\u0011R\u001b\u0010#\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b%\u0010\u0013\u001a\u0004\b$\u0010\u0011R\u001b\u0010&\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b(\u0010\u0013\u001a\u0004\b'\u0010\u0011R\u001b\u0010)\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b+\u0010\u0013\u001a\u0004\b*\u0010\u0011R\u001b\u0010,\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b.\u0010\u0013\u001a\u0004\b-\u0010\u0011R\u001b\u0010/\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b1\u0010\u0013\u001a\u0004\b0\u0010\u0011R\u001b\u00102\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b4\u0010\u0013\u001a\u0004\b3\u0010\u0011R\u001b\u00105\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b7\u0010\u0013\u001a\u0004\b6\u0010\u0011R\u001b\u00108\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b:\u0010\u0013\u001a\u0004\b9\u0010\u0011R\u001b\u0010;\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b=\u0010\u0013\u001a\u0004\b<\u0010\u0011R\u001b\u0010>\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b@\u0010\u0013\u001a\u0004\b?\u0010\u0011R\u001b\u0010A\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bC\u0010\u0013\u001a\u0004\bB\u0010\u0011R\u001b\u0010D\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bF\u0010\u0013\u001a\u0004\bE\u0010\u0011R\u001b\u0010G\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bI\u0010\u0013\u001a\u0004\bH\u0010\u0011R\u001b\u0010J\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bL\u0010\u0013\u001a\u0004\bK\u0010\u0011R\u001b\u0010M\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bO\u0010\u0013\u001a\u0004\bN\u0010\u0011R\u001b\u0010P\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bR\u0010\u0013\u001a\u0004\bQ\u0010\u0011R\u001b\u0010S\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bU\u0010\u0013\u001a\u0004\bT\u0010\u0011R\u001b\u0010V\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bX\u0010\u0013\u001a\u0004\bW\u0010\u0011R\u001b\u0010Y\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b[\u0010\u0013\u001a\u0004\bZ\u0010\u0011R\u001b\u0010\\\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b^\u0010\u0013\u001a\u0004\b]\u0010\u0011R\u001b\u0010_\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\ba\u0010\u0013\u001a\u0004\b`\u0010\u0011R\u001b\u0010b\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bd\u0010\u0013\u001a\u0004\bc\u0010\u0011R\u001b\u0010e\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bg\u0010\u0013\u001a\u0004\bf\u0010\u0011R\u001b\u0010h\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bj\u0010\u0013\u001a\u0004\bi\u0010\u0011R\u001b\u0010k\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bm\u0010\u0013\u001a\u0004\bl\u0010\u0011R\u001b\u0010n\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bp\u0010\u0013\u001a\u0004\bo\u0010\u0011R\u001b\u0010q\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bs\u0010\u0013\u001a\u0004\br\u0010\u0011R\u001b\u0010t\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bv\u0010\u0013\u001a\u0004\bu\u0010\u0011R\u001b\u0010w\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\by\u0010\u0013\u001a\u0004\bx\u0010\u0011R\u001b\u0010z\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b|\u0010\u0013\u001a\u0004\b{\u0010\u0011R\u001b\u0010}\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u007f\u0010\u0013\u001a\u0004\b~\u0010\u0011R\u001e\u0010\u0080\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0082\u0001\u0010\u0013\u001a\u0005\b\u0081\u0001\u0010\u0011R\u001e\u0010\u0083\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0085\u0001\u0010\u0013\u001a\u0005\b\u0084\u0001\u0010\u0011R\u001e\u0010\u0086\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0088\u0001\u0010\u0013\u001a\u0005\b\u0087\u0001\u0010\u0011R\u001e\u0010\u0089\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u008b\u0001\u0010\u0013\u001a\u0005\b\u008a\u0001\u0010\u0011R\u001e\u0010\u008c\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u008e\u0001\u0010\u0013\u001a\u0005\b\u008d\u0001\u0010\u0011R\u001e\u0010\u008f\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0091\u0001\u0010\u0013\u001a\u0005\b\u0090\u0001\u0010\u0011R\u001e\u0010\u0092\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0094\u0001\u0010\u0013\u001a\u0005\b\u0093\u0001\u0010\u0011R\u001e\u0010\u0095\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0097\u0001\u0010\u0013\u001a\u0005\b\u0096\u0001\u0010\u0011R\u001e\u0010\u0098\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u009a\u0001\u0010\u0013\u001a\u0005\b\u0099\u0001\u0010\u0011R\u001e\u0010\u009b\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u009d\u0001\u0010\u0013\u001a\u0005\b\u009c\u0001\u0010\u0011R\u001e\u0010\u009e\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b \u0001\u0010\u0013\u001a\u0005\b\u009f\u0001\u0010\u0011R\u001e\u0010¡\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b£\u0001\u0010\u0013\u001a\u0005\b¢\u0001\u0010\u0011R\u001e\u0010¤\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¦\u0001\u0010\u0013\u001a\u0005\b¥\u0001\u0010\u0011R\u001e\u0010§\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b©\u0001\u0010\u0013\u001a\u0005\b¨\u0001\u0010\u0011R\u001e\u0010ª\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¬\u0001\u0010\u0013\u001a\u0005\b«\u0001\u0010\u0011R\u001e\u0010\u00ad\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¯\u0001\u0010\u0013\u001a\u0005\b®\u0001\u0010\u0011R\u001e\u0010°\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b²\u0001\u0010\u0013\u001a\u0005\b±\u0001\u0010\u0011R\u001e\u0010³\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bµ\u0001\u0010\u0013\u001a\u0005\b´\u0001\u0010\u0011R\u001e\u0010¶\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¸\u0001\u0010\u0013\u001a\u0005\b·\u0001\u0010\u0011R\u001e\u0010¹\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b»\u0001\u0010\u0013\u001a\u0005\bº\u0001\u0010\u0011R\u001e\u0010¼\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¾\u0001\u0010\u0013\u001a\u0005\b½\u0001\u0010\u0011R\u001e\u0010¿\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÁ\u0001\u0010\u0013\u001a\u0005\bÀ\u0001\u0010\u0011R\u001e\u0010Â\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÄ\u0001\u0010\u0013\u001a\u0005\bÃ\u0001\u0010\u0011R\u001e\u0010Å\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÇ\u0001\u0010\u0013\u001a\u0005\bÆ\u0001\u0010\u0011R\u001e\u0010È\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÊ\u0001\u0010\u0013\u001a\u0005\bÉ\u0001\u0010\u0011R\u001e\u0010Ë\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÍ\u0001\u0010\u0013\u001a\u0005\bÌ\u0001\u0010\u0011R\u001e\u0010Î\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÐ\u0001\u0010\u0013\u001a\u0005\bÏ\u0001\u0010\u0011R\u001e\u0010Ñ\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÓ\u0001\u0010\u0013\u001a\u0005\bÒ\u0001\u0010\u0011R\u001e\u0010Ô\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÖ\u0001\u0010\u0013\u001a\u0005\bÕ\u0001\u0010\u0011R\u001e\u0010×\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÙ\u0001\u0010\u0013\u001a\u0005\bØ\u0001\u0010\u0011R\u001e\u0010Ú\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÜ\u0001\u0010\u0013\u001a\u0005\bÛ\u0001\u0010\u0011R\u001e\u0010Ý\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bß\u0001\u0010\u0013\u001a\u0005\bÞ\u0001\u0010\u0011R\u001e\u0010à\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bâ\u0001\u0010\u0013\u001a\u0005\bá\u0001\u0010\u0011R\u001e\u0010ã\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bå\u0001\u0010\u0013\u001a\u0005\bä\u0001\u0010\u0011R\u001e\u0010æ\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bè\u0001\u0010\u0013\u001a\u0005\bç\u0001\u0010\u0011R\u001e\u0010é\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bë\u0001\u0010\u0013\u001a\u0005\bê\u0001\u0010\u0011R\u001e\u0010ì\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bî\u0001\u0010\u0013\u001a\u0005\bí\u0001\u0010\u0011R\u001e\u0010ï\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bñ\u0001\u0010\u0013\u001a\u0005\bð\u0001\u0010\u0011R\u001e\u0010ò\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bô\u0001\u0010\u0013\u001a\u0005\bó\u0001\u0010\u0011R\u001e\u0010õ\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b÷\u0001\u0010\u0013\u001a\u0005\bö\u0001\u0010\u0011R\u001e\u0010ø\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bú\u0001\u0010\u0013\u001a\u0005\bù\u0001\u0010\u0011R\u001e\u0010û\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bý\u0001\u0010\u0013\u001a\u0005\bü\u0001\u0010\u0011R\u001e\u0010þ\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0080\u0002\u0010\u0013\u001a\u0005\bÿ\u0001\u0010\u0011R\u001e\u0010\u0081\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0083\u0002\u0010\u0013\u001a\u0005\b\u0082\u0002\u0010\u0011R\u001e\u0010\u0084\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0086\u0002\u0010\u0013\u001a\u0005\b\u0085\u0002\u0010\u0011R\u001e\u0010\u0087\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0089\u0002\u0010\u0013\u001a\u0005\b\u0088\u0002\u0010\u0011R\u001e\u0010\u008a\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u008c\u0002\u0010\u0013\u001a\u0005\b\u008b\u0002\u0010\u0011R\u001e\u0010\u008d\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u008f\u0002\u0010\u0013\u001a\u0005\b\u008e\u0002\u0010\u0011R\u001e\u0010\u0090\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0092\u0002\u0010\u0013\u001a\u0005\b\u0091\u0002\u0010\u0011R\u001e\u0010\u0093\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0095\u0002\u0010\u0013\u001a\u0005\b\u0094\u0002\u0010\u0011R\u001e\u0010\u0096\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0098\u0002\u0010\u0013\u001a\u0005\b\u0097\u0002\u0010\u0011¨\u0006\u0099\u0002"}, d2 = {"Lcom/discord/theme/DarkTheme;", "Lcom/discord/theme/DiscordThemeObject;", "resources", "Landroid/content/res/Resources;", "theme", "Landroid/content/res/Resources$Theme;", "<init>", "(Landroid/content/res/Resources;Landroid/content/res/Resources$Theme;)V", "getColorRes", "", "lightColorRes", "darkColorRes", "getColor", "lightColor", "darkColor", "backgroundAccent", "getBackgroundAccent", "()I", "backgroundAccent$delegate", "Lkotlin/Lazy;", "backgroundBaseLow", "getBackgroundBaseLow", "backgroundBaseLow$delegate", "backgroundBaseLower", "getBackgroundBaseLower", "backgroundBaseLower$delegate", "backgroundBaseLowest", "getBackgroundBaseLowest", "backgroundBaseLowest$delegate", "backgroundFeedbackCritical", "getBackgroundFeedbackCritical", "backgroundFeedbackCritical$delegate", "backgroundFeedbackNotification", "getBackgroundFeedbackNotification", "backgroundFeedbackNotification$delegate", "backgroundModMuted", "getBackgroundModMuted", "backgroundModMuted$delegate", "backgroundModNormal", "getBackgroundModNormal", "backgroundModNormal$delegate", "backgroundModStrong", "getBackgroundModStrong", "backgroundModStrong$delegate", "backgroundModSubtle", "getBackgroundModSubtle", "backgroundModSubtle$delegate", "backgroundScrim", "getBackgroundScrim", "backgroundScrim$delegate", "backgroundScrimLightbox", "getBackgroundScrimLightbox", "backgroundScrimLightbox$delegate", "backgroundSecondaryAlt", "getBackgroundSecondaryAlt", "backgroundSecondaryAlt$delegate", "backgroundSurfaceHigh", "getBackgroundSurfaceHigh", "backgroundSurfaceHigh$delegate", "backgroundSurfaceHighest", "getBackgroundSurfaceHighest", "backgroundSurfaceHighest$delegate", "badgeBackgroundBrand", "getBadgeBackgroundBrand", "badgeBackgroundBrand$delegate", "badgeNotificationBackground", "getBadgeNotificationBackground", "badgeNotificationBackground$delegate", "bgSurfaceRaised", "getBgSurfaceRaised", "bgSurfaceRaised$delegate", "borderStrong", "getBorderStrong", "borderStrong$delegate", "borderSubtle", "getBorderSubtle", "borderSubtle$delegate", "cardBackgroundDefault", "getCardBackgroundDefault", "cardBackgroundDefault$delegate", "chatSwipeToReplyBackground", "getChatSwipeToReplyBackground", "chatSwipeToReplyBackground$delegate", "chatSwipeToReplyGradientBackground", "getChatSwipeToReplyGradientBackground", "chatSwipeToReplyGradientBackground$delegate", "controlConnectedBackgroundActive", "getControlConnectedBackgroundActive", "controlConnectedBackgroundActive$delegate", "controlConnectedBackgroundDefault", "getControlConnectedBackgroundDefault", "controlConnectedBackgroundDefault$delegate", "controlConnectedBorderDefault", "getControlConnectedBorderDefault", "controlConnectedBorderDefault$delegate", "controlConnectedTextDefault", "getControlConnectedTextDefault", "controlConnectedTextDefault$delegate", "controlCriticalPrimaryBackgroundActive", "getControlCriticalPrimaryBackgroundActive", "controlCriticalPrimaryBackgroundActive$delegate", "controlCriticalPrimaryBackgroundDefault", "getControlCriticalPrimaryBackgroundDefault", "controlCriticalPrimaryBackgroundDefault$delegate", "controlCriticalPrimaryBorderDefault", "getControlCriticalPrimaryBorderDefault", "controlCriticalPrimaryBorderDefault$delegate", "controlCriticalPrimaryTextDefault", "getControlCriticalPrimaryTextDefault", "controlCriticalPrimaryTextDefault$delegate", "controlOverlayPrimaryBackgroundActive", "getControlOverlayPrimaryBackgroundActive", "controlOverlayPrimaryBackgroundActive$delegate", "controlOverlayPrimaryBackgroundDefault", "getControlOverlayPrimaryBackgroundDefault", "controlOverlayPrimaryBackgroundDefault$delegate", "controlOverlayPrimaryBorderDefault", "getControlOverlayPrimaryBorderDefault", "controlOverlayPrimaryBorderDefault$delegate", "controlOverlayPrimaryTextDefault", "getControlOverlayPrimaryTextDefault", "controlOverlayPrimaryTextDefault$delegate", "controlOverlaySecondaryBackgroundActive", "getControlOverlaySecondaryBackgroundActive", "controlOverlaySecondaryBackgroundActive$delegate", "controlOverlaySecondaryBackgroundDefault", "getControlOverlaySecondaryBackgroundDefault", "controlOverlaySecondaryBackgroundDefault$delegate", "controlOverlaySecondaryBorderDefault", "getControlOverlaySecondaryBorderDefault", "controlOverlaySecondaryBorderDefault$delegate", "controlOverlaySecondaryTextDefault", "getControlOverlaySecondaryTextDefault", "controlOverlaySecondaryTextDefault$delegate", "controlPrimaryBackgroundActive", "getControlPrimaryBackgroundActive", "controlPrimaryBackgroundActive$delegate", "controlPrimaryBackgroundDefault", "getControlPrimaryBackgroundDefault", "controlPrimaryBackgroundDefault$delegate", "controlPrimaryBorderDefault", "getControlPrimaryBorderDefault", "controlPrimaryBorderDefault$delegate", "controlPrimaryTextDefault", "getControlPrimaryTextDefault", "controlPrimaryTextDefault$delegate", "controlSecondaryBackgroundActive", "getControlSecondaryBackgroundActive", "controlSecondaryBackgroundActive$delegate", "controlSecondaryBackgroundDefault", "getControlSecondaryBackgroundDefault", "controlSecondaryBackgroundDefault$delegate", "controlSecondaryBorderActive", "getControlSecondaryBorderActive", "controlSecondaryBorderActive$delegate", "controlSecondaryBorderDefault", "getControlSecondaryBorderDefault", "controlSecondaryBorderDefault$delegate", "controlSecondaryTextDefault", "getControlSecondaryTextDefault", "controlSecondaryTextDefault$delegate", "embedBackground", "getEmbedBackground", "embedBackground$delegate", "iconFeedbackCritical", "getIconFeedbackCritical", "iconFeedbackCritical$delegate", "iconFeedbackInfo", "getIconFeedbackInfo", "iconFeedbackInfo$delegate", "iconFeedbackNotification", "getIconFeedbackNotification", "iconFeedbackNotification$delegate", "iconFeedbackPositive", "getIconFeedbackPositive", "iconFeedbackPositive$delegate", "iconFeedbackWarning", "getIconFeedbackWarning", "iconFeedbackWarning$delegate", "inputBackgroundDefault", "getInputBackgroundDefault", "inputBackgroundDefault$delegate", "inputBorderDefault", "getInputBorderDefault", "inputBorderDefault$delegate", "interactiveBackgroundSelected", "getInteractiveBackgroundSelected", "interactiveBackgroundSelected$delegate", "interactiveIconActive", "getInteractiveIconActive", "interactiveIconActive$delegate", "interactiveIconDefault", "getInteractiveIconDefault", "interactiveIconDefault$delegate", "interactiveMuted", "getInteractiveMuted", "interactiveMuted$delegate", "interactiveTextActive", "getInteractiveTextActive", "interactiveTextActive$delegate", "interactiveTextDefault", "getInteractiveTextDefault", "interactiveTextDefault$delegate", "messageHighlightBackgroundDefault", "getMessageHighlightBackgroundDefault", "messageHighlightBackgroundDefault$delegate", "mobileAndroidButtonBackgroundRipple", "getMobileAndroidButtonBackgroundRipple", "mobileAndroidButtonBackgroundRipple$delegate", "mobileLegacyButtonSecondaryBackgroundDefault", "getMobileLegacyButtonSecondaryBackgroundDefault", "mobileLegacyButtonSecondaryBackgroundDefault$delegate", "mobileLegacyButtonSecondaryBorderDefault", "getMobileLegacyButtonSecondaryBorderDefault", "mobileLegacyButtonSecondaryBorderDefault$delegate", "mobileLegacyButtonSecondaryTextDefault", "getMobileLegacyButtonSecondaryTextDefault", "mobileLegacyButtonSecondaryTextDefault$delegate", "mobileTextHeadingPrimary", "getMobileTextHeadingPrimary", "mobileTextHeadingPrimary$delegate", "redesignButtonTertiaryBackground", "getRedesignButtonTertiaryBackground", "redesignButtonTertiaryBackground$delegate", "redesignButtonTertiaryText", "getRedesignButtonTertiaryText", "redesignButtonTertiaryText$delegate", "spineDefault", "getSpineDefault", "spineDefault$delegate", "spoilerHiddenBackground", "getSpoilerHiddenBackground", "spoilerHiddenBackground$delegate", "spoilerRevealedBackground", "getSpoilerRevealedBackground", "spoilerRevealedBackground$delegate", "statusDanger", "getStatusDanger", "statusDanger$delegate", "statusPositive", "getStatusPositive", "statusPositive$delegate", "statusPositiveText", "getStatusPositiveText", "statusPositiveText$delegate", "statusWarning", "getStatusWarning", "statusWarning$delegate", "textBrand", "getTextBrand", "textBrand$delegate", "textDefault", "getTextDefault", "textDefault$delegate", "textFeedbackCritical", "getTextFeedbackCritical", "textFeedbackCritical$delegate", "textFeedbackInfo", "getTextFeedbackInfo", "textFeedbackInfo$delegate", "textFeedbackPositive", "getTextFeedbackPositive", "textFeedbackPositive$delegate", "textFeedbackWarning", "getTextFeedbackWarning", "textFeedbackWarning$delegate", "textLink", "getTextLink", "textLink$delegate", "textMuted", "getTextMuted", "textMuted$delegate", "textStrong", "getTextStrong", "textStrong$delegate", "textSubtle", "getTextSubtle", "textSubtle$delegate", "white", "getWhite", "white$delegate", "theme_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DarkTheme extends DiscordThemeObject {
    @NotNull
    private final Lazy backgroundAccent$delegate;
    @NotNull
    private final Lazy backgroundBaseLow$delegate;
    @NotNull
    private final Lazy backgroundBaseLower$delegate;
    @NotNull
    private final Lazy backgroundBaseLowest$delegate;
    @NotNull
    private final Lazy backgroundFeedbackCritical$delegate;
    @NotNull
    private final Lazy backgroundFeedbackNotification$delegate;
    @NotNull
    private final Lazy backgroundModMuted$delegate;
    @NotNull
    private final Lazy backgroundModNormal$delegate;
    @NotNull
    private final Lazy backgroundModStrong$delegate;
    @NotNull
    private final Lazy backgroundModSubtle$delegate;
    @NotNull
    private final Lazy backgroundScrim$delegate;
    @NotNull
    private final Lazy backgroundScrimLightbox$delegate;
    @NotNull
    private final Lazy backgroundSecondaryAlt$delegate;
    @NotNull
    private final Lazy backgroundSurfaceHigh$delegate;
    @NotNull
    private final Lazy backgroundSurfaceHighest$delegate;
    @NotNull
    private final Lazy badgeBackgroundBrand$delegate;
    @NotNull
    private final Lazy badgeNotificationBackground$delegate;
    @NotNull
    private final Lazy bgSurfaceRaised$delegate;
    @NotNull
    private final Lazy borderStrong$delegate;
    @NotNull
    private final Lazy borderSubtle$delegate;
    @NotNull
    private final Lazy cardBackgroundDefault$delegate;
    @NotNull
    private final Lazy chatSwipeToReplyBackground$delegate;
    @NotNull
    private final Lazy chatSwipeToReplyGradientBackground$delegate;
    @NotNull
    private final Lazy controlConnectedBackgroundActive$delegate;
    @NotNull
    private final Lazy controlConnectedBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlConnectedBorderDefault$delegate;
    @NotNull
    private final Lazy controlConnectedTextDefault$delegate;
    @NotNull
    private final Lazy controlCriticalPrimaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlCriticalPrimaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlCriticalPrimaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlCriticalPrimaryTextDefault$delegate;
    @NotNull
    private final Lazy controlOverlayPrimaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlOverlayPrimaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlOverlayPrimaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlOverlayPrimaryTextDefault$delegate;
    @NotNull
    private final Lazy controlOverlaySecondaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlOverlaySecondaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlOverlaySecondaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlOverlaySecondaryTextDefault$delegate;
    @NotNull
    private final Lazy controlPrimaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlPrimaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlPrimaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlPrimaryTextDefault$delegate;
    @NotNull
    private final Lazy controlSecondaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlSecondaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlSecondaryBorderActive$delegate;
    @NotNull
    private final Lazy controlSecondaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlSecondaryTextDefault$delegate;
    @NotNull
    private final Lazy embedBackground$delegate;
    @NotNull
    private final Lazy iconFeedbackCritical$delegate;
    @NotNull
    private final Lazy iconFeedbackInfo$delegate;
    @NotNull
    private final Lazy iconFeedbackNotification$delegate;
    @NotNull
    private final Lazy iconFeedbackPositive$delegate;
    @NotNull
    private final Lazy iconFeedbackWarning$delegate;
    @NotNull
    private final Lazy inputBackgroundDefault$delegate;
    @NotNull
    private final Lazy inputBorderDefault$delegate;
    @NotNull
    private final Lazy interactiveBackgroundSelected$delegate;
    @NotNull
    private final Lazy interactiveIconActive$delegate;
    @NotNull
    private final Lazy interactiveIconDefault$delegate;
    @NotNull
    private final Lazy interactiveMuted$delegate;
    @NotNull
    private final Lazy interactiveTextActive$delegate;
    @NotNull
    private final Lazy interactiveTextDefault$delegate;
    @NotNull
    private final Lazy messageHighlightBackgroundDefault$delegate;
    @NotNull
    private final Lazy mobileAndroidButtonBackgroundRipple$delegate;
    @NotNull
    private final Lazy mobileLegacyButtonSecondaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy mobileLegacyButtonSecondaryBorderDefault$delegate;
    @NotNull
    private final Lazy mobileLegacyButtonSecondaryTextDefault$delegate;
    @NotNull
    private final Lazy mobileTextHeadingPrimary$delegate;
    @NotNull
    private final Lazy redesignButtonTertiaryBackground$delegate;
    @NotNull
    private final Lazy redesignButtonTertiaryText$delegate;
    @NotNull
    private final Lazy spineDefault$delegate;
    @NotNull
    private final Lazy spoilerHiddenBackground$delegate;
    @NotNull
    private final Lazy spoilerRevealedBackground$delegate;
    @NotNull
    private final Lazy statusDanger$delegate;
    @NotNull
    private final Lazy statusPositive$delegate;
    @NotNull
    private final Lazy statusPositiveText$delegate;
    @NotNull
    private final Lazy statusWarning$delegate;
    @NotNull
    private final Lazy textBrand$delegate;
    @NotNull
    private final Lazy textDefault$delegate;
    @NotNull
    private final Lazy textFeedbackCritical$delegate;
    @NotNull
    private final Lazy textFeedbackInfo$delegate;
    @NotNull
    private final Lazy textFeedbackPositive$delegate;
    @NotNull
    private final Lazy textFeedbackWarning$delegate;
    @NotNull
    private final Lazy textLink$delegate;
    @NotNull
    private final Lazy textMuted$delegate;
    @NotNull
    private final Lazy textStrong$delegate;
    @NotNull
    private final Lazy textSubtle$delegate;
    @NotNull
    private final Lazy white$delegate;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DarkTheme(@NotNull final Resources resources, @NotNull final Resources.Theme theme) {
        super(null);
        Intrinsics.checkNotNullParameter(resources, "resources");
        Intrinsics.checkNotNullParameter(theme, "theme");
        this.backgroundAccent$delegate = l.b(new Function0() { // from class: g8.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundAccent_delegate$lambda$0;
                backgroundAccent_delegate$lambda$0 = DarkTheme.backgroundAccent_delegate$lambda$0(resources, theme);
                return Integer.valueOf(backgroundAccent_delegate$lambda$0);
            }
        });
        this.backgroundBaseLow$delegate = l.b(new Function0() { // from class: g8.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundBaseLow_delegate$lambda$1;
                backgroundBaseLow_delegate$lambda$1 = DarkTheme.backgroundBaseLow_delegate$lambda$1(resources, theme);
                return Integer.valueOf(backgroundBaseLow_delegate$lambda$1);
            }
        });
        this.backgroundBaseLower$delegate = l.b(new Function0() { // from class: g8.o
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundBaseLower_delegate$lambda$2;
                backgroundBaseLower_delegate$lambda$2 = DarkTheme.backgroundBaseLower_delegate$lambda$2(resources, theme);
                return Integer.valueOf(backgroundBaseLower_delegate$lambda$2);
            }
        });
        this.backgroundBaseLowest$delegate = l.b(new Function0() { // from class: g8.a0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundBaseLowest_delegate$lambda$3;
                backgroundBaseLowest_delegate$lambda$3 = DarkTheme.backgroundBaseLowest_delegate$lambda$3(resources, theme);
                return Integer.valueOf(backgroundBaseLowest_delegate$lambda$3);
            }
        });
        this.backgroundFeedbackCritical$delegate = l.b(new Function0() { // from class: g8.m0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundFeedbackCritical_delegate$lambda$4;
                backgroundFeedbackCritical_delegate$lambda$4 = DarkTheme.backgroundFeedbackCritical_delegate$lambda$4(resources, theme);
                return Integer.valueOf(backgroundFeedbackCritical_delegate$lambda$4);
            }
        });
        this.backgroundFeedbackNotification$delegate = l.b(new Function0() { // from class: g8.y0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundFeedbackNotification_delegate$lambda$5;
                backgroundFeedbackNotification_delegate$lambda$5 = DarkTheme.backgroundFeedbackNotification_delegate$lambda$5(resources, theme);
                return Integer.valueOf(backgroundFeedbackNotification_delegate$lambda$5);
            }
        });
        this.backgroundModMuted$delegate = l.b(new Function0() { // from class: g8.k1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundModMuted_delegate$lambda$6;
                backgroundModMuted_delegate$lambda$6 = DarkTheme.backgroundModMuted_delegate$lambda$6(resources, theme);
                return Integer.valueOf(backgroundModMuted_delegate$lambda$6);
            }
        });
        this.backgroundModNormal$delegate = l.b(new Function0() { // from class: g8.w1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundModNormal_delegate$lambda$7;
                backgroundModNormal_delegate$lambda$7 = DarkTheme.backgroundModNormal_delegate$lambda$7(resources, theme);
                return Integer.valueOf(backgroundModNormal_delegate$lambda$7);
            }
        });
        this.backgroundModStrong$delegate = l.b(new Function0() { // from class: g8.g2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundModStrong_delegate$lambda$8;
                backgroundModStrong_delegate$lambda$8 = DarkTheme.backgroundModStrong_delegate$lambda$8(resources, theme);
                return Integer.valueOf(backgroundModStrong_delegate$lambda$8);
            }
        });
        this.backgroundModSubtle$delegate = l.b(new Function0() { // from class: g8.h2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundModSubtle_delegate$lambda$9;
                backgroundModSubtle_delegate$lambda$9 = DarkTheme.backgroundModSubtle_delegate$lambda$9(resources, theme);
                return Integer.valueOf(backgroundModSubtle_delegate$lambda$9);
            }
        });
        this.backgroundScrim$delegate = l.b(new Function0() { // from class: g8.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundScrim_delegate$lambda$10;
                backgroundScrim_delegate$lambda$10 = DarkTheme.backgroundScrim_delegate$lambda$10(resources, theme);
                return Integer.valueOf(backgroundScrim_delegate$lambda$10);
            }
        });
        this.backgroundScrimLightbox$delegate = l.b(new Function0() { // from class: g8.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundScrimLightbox_delegate$lambda$11;
                backgroundScrimLightbox_delegate$lambda$11 = DarkTheme.backgroundScrimLightbox_delegate$lambda$11(resources, theme);
                return Integer.valueOf(backgroundScrimLightbox_delegate$lambda$11);
            }
        });
        this.backgroundSecondaryAlt$delegate = l.b(new Function0() { // from class: g8.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundSecondaryAlt_delegate$lambda$12;
                backgroundSecondaryAlt_delegate$lambda$12 = DarkTheme.backgroundSecondaryAlt_delegate$lambda$12(resources, theme);
                return Integer.valueOf(backgroundSecondaryAlt_delegate$lambda$12);
            }
        });
        this.backgroundSurfaceHigh$delegate = l.b(new Function0() { // from class: g8.s0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundSurfaceHigh_delegate$lambda$13;
                backgroundSurfaceHigh_delegate$lambda$13 = DarkTheme.backgroundSurfaceHigh_delegate$lambda$13(resources, theme);
                return Integer.valueOf(backgroundSurfaceHigh_delegate$lambda$13);
            }
        });
        this.backgroundSurfaceHighest$delegate = l.b(new Function0() { // from class: g8.d1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundSurfaceHighest_delegate$lambda$14;
                backgroundSurfaceHighest_delegate$lambda$14 = DarkTheme.backgroundSurfaceHighest_delegate$lambda$14(resources, theme);
                return Integer.valueOf(backgroundSurfaceHighest_delegate$lambda$14);
            }
        });
        this.badgeBackgroundBrand$delegate = l.b(new Function0() { // from class: g8.o1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int badgeBackgroundBrand_delegate$lambda$15;
                badgeBackgroundBrand_delegate$lambda$15 = DarkTheme.badgeBackgroundBrand_delegate$lambda$15(resources, theme);
                return Integer.valueOf(badgeBackgroundBrand_delegate$lambda$15);
            }
        });
        this.badgeNotificationBackground$delegate = l.b(new Function0() { // from class: g8.z1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int badgeNotificationBackground_delegate$lambda$16;
                badgeNotificationBackground_delegate$lambda$16 = DarkTheme.badgeNotificationBackground_delegate$lambda$16(resources, theme);
                return Integer.valueOf(badgeNotificationBackground_delegate$lambda$16);
            }
        });
        this.bgSurfaceRaised$delegate = l.b(new Function0() { // from class: g8.i2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int bgSurfaceRaised_delegate$lambda$17;
                bgSurfaceRaised_delegate$lambda$17 = DarkTheme.bgSurfaceRaised_delegate$lambda$17(resources, theme);
                return Integer.valueOf(bgSurfaceRaised_delegate$lambda$17);
            }
        });
        this.borderStrong$delegate = l.b(new Function0() { // from class: g8.j2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int borderStrong_delegate$lambda$18;
                borderStrong_delegate$lambda$18 = DarkTheme.borderStrong_delegate$lambda$18(resources, theme);
                return Integer.valueOf(borderStrong_delegate$lambda$18);
            }
        });
        this.borderSubtle$delegate = l.b(new Function0() { // from class: g8.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int borderSubtle_delegate$lambda$19;
                borderSubtle_delegate$lambda$19 = DarkTheme.borderSubtle_delegate$lambda$19(resources, theme);
                return Integer.valueOf(borderSubtle_delegate$lambda$19);
            }
        });
        this.cardBackgroundDefault$delegate = l.b(new Function0() { // from class: g8.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int cardBackgroundDefault_delegate$lambda$20;
                cardBackgroundDefault_delegate$lambda$20 = DarkTheme.cardBackgroundDefault_delegate$lambda$20(resources, theme);
                return Integer.valueOf(cardBackgroundDefault_delegate$lambda$20);
            }
        });
        this.chatSwipeToReplyBackground$delegate = l.b(new Function0() { // from class: g8.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int chatSwipeToReplyBackground_delegate$lambda$21;
                chatSwipeToReplyBackground_delegate$lambda$21 = DarkTheme.chatSwipeToReplyBackground_delegate$lambda$21(resources, theme);
                return Integer.valueOf(chatSwipeToReplyBackground_delegate$lambda$21);
            }
        });
        this.chatSwipeToReplyGradientBackground$delegate = l.b(new Function0() { // from class: g8.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int chatSwipeToReplyGradientBackground_delegate$lambda$22;
                chatSwipeToReplyGradientBackground_delegate$lambda$22 = DarkTheme.chatSwipeToReplyGradientBackground_delegate$lambda$22(resources, theme);
                return Integer.valueOf(chatSwipeToReplyGradientBackground_delegate$lambda$22);
            }
        });
        this.controlConnectedBackgroundActive$delegate = l.b(new Function0() { // from class: g8.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlConnectedBackgroundActive_delegate$lambda$23;
                controlConnectedBackgroundActive_delegate$lambda$23 = DarkTheme.controlConnectedBackgroundActive_delegate$lambda$23(resources, theme);
                return Integer.valueOf(controlConnectedBackgroundActive_delegate$lambda$23);
            }
        });
        this.controlConnectedBackgroundDefault$delegate = l.b(new Function0() { // from class: g8.h
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlConnectedBackgroundDefault_delegate$lambda$24;
                controlConnectedBackgroundDefault_delegate$lambda$24 = DarkTheme.controlConnectedBackgroundDefault_delegate$lambda$24(resources, theme);
                return Integer.valueOf(controlConnectedBackgroundDefault_delegate$lambda$24);
            }
        });
        this.controlConnectedBorderDefault$delegate = l.b(new Function0() { // from class: g8.i
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlConnectedBorderDefault_delegate$lambda$25;
                controlConnectedBorderDefault_delegate$lambda$25 = DarkTheme.controlConnectedBorderDefault_delegate$lambda$25(resources, theme);
                return Integer.valueOf(controlConnectedBorderDefault_delegate$lambda$25);
            }
        });
        this.controlConnectedTextDefault$delegate = l.b(new Function0() { // from class: g8.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlConnectedTextDefault_delegate$lambda$26;
                controlConnectedTextDefault_delegate$lambda$26 = DarkTheme.controlConnectedTextDefault_delegate$lambda$26(resources, theme);
                return Integer.valueOf(controlConnectedTextDefault_delegate$lambda$26);
            }
        });
        this.controlCriticalPrimaryBackgroundActive$delegate = l.b(new Function0() { // from class: g8.k
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlCriticalPrimaryBackgroundActive_delegate$lambda$27;
                controlCriticalPrimaryBackgroundActive_delegate$lambda$27 = DarkTheme.controlCriticalPrimaryBackgroundActive_delegate$lambda$27(resources, theme);
                return Integer.valueOf(controlCriticalPrimaryBackgroundActive_delegate$lambda$27);
            }
        });
        this.controlCriticalPrimaryBackgroundDefault$delegate = l.b(new Function0() { // from class: g8.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlCriticalPrimaryBackgroundDefault_delegate$lambda$28;
                controlCriticalPrimaryBackgroundDefault_delegate$lambda$28 = DarkTheme.controlCriticalPrimaryBackgroundDefault_delegate$lambda$28(resources, theme);
                return Integer.valueOf(controlCriticalPrimaryBackgroundDefault_delegate$lambda$28);
            }
        });
        this.controlCriticalPrimaryBorderDefault$delegate = l.b(new Function0() { // from class: g8.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlCriticalPrimaryBorderDefault_delegate$lambda$29;
                controlCriticalPrimaryBorderDefault_delegate$lambda$29 = DarkTheme.controlCriticalPrimaryBorderDefault_delegate$lambda$29(resources, theme);
                return Integer.valueOf(controlCriticalPrimaryBorderDefault_delegate$lambda$29);
            }
        });
        this.controlCriticalPrimaryTextDefault$delegate = l.b(new Function0() { // from class: g8.p
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlCriticalPrimaryTextDefault_delegate$lambda$30;
                controlCriticalPrimaryTextDefault_delegate$lambda$30 = DarkTheme.controlCriticalPrimaryTextDefault_delegate$lambda$30(resources, theme);
                return Integer.valueOf(controlCriticalPrimaryTextDefault_delegate$lambda$30);
            }
        });
        this.controlOverlayPrimaryBackgroundActive$delegate = l.b(new Function0() { // from class: g8.q
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlayPrimaryBackgroundActive_delegate$lambda$31;
                controlOverlayPrimaryBackgroundActive_delegate$lambda$31 = DarkTheme.controlOverlayPrimaryBackgroundActive_delegate$lambda$31(resources, theme);
                return Integer.valueOf(controlOverlayPrimaryBackgroundActive_delegate$lambda$31);
            }
        });
        this.controlOverlayPrimaryBackgroundDefault$delegate = l.b(new Function0() { // from class: g8.r
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlayPrimaryBackgroundDefault_delegate$lambda$32;
                controlOverlayPrimaryBackgroundDefault_delegate$lambda$32 = DarkTheme.controlOverlayPrimaryBackgroundDefault_delegate$lambda$32(resources, theme);
                return Integer.valueOf(controlOverlayPrimaryBackgroundDefault_delegate$lambda$32);
            }
        });
        this.controlOverlayPrimaryBorderDefault$delegate = l.b(new Function0() { // from class: g8.s
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlayPrimaryBorderDefault_delegate$lambda$33;
                controlOverlayPrimaryBorderDefault_delegate$lambda$33 = DarkTheme.controlOverlayPrimaryBorderDefault_delegate$lambda$33(resources, theme);
                return Integer.valueOf(controlOverlayPrimaryBorderDefault_delegate$lambda$33);
            }
        });
        this.controlOverlayPrimaryTextDefault$delegate = l.b(new Function0() { // from class: g8.t
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlayPrimaryTextDefault_delegate$lambda$34;
                controlOverlayPrimaryTextDefault_delegate$lambda$34 = DarkTheme.controlOverlayPrimaryTextDefault_delegate$lambda$34(resources, theme);
                return Integer.valueOf(controlOverlayPrimaryTextDefault_delegate$lambda$34);
            }
        });
        this.controlOverlaySecondaryBackgroundActive$delegate = l.b(new Function0() { // from class: g8.u
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlaySecondaryBackgroundActive_delegate$lambda$35;
                controlOverlaySecondaryBackgroundActive_delegate$lambda$35 = DarkTheme.controlOverlaySecondaryBackgroundActive_delegate$lambda$35(resources, theme);
                return Integer.valueOf(controlOverlaySecondaryBackgroundActive_delegate$lambda$35);
            }
        });
        this.controlOverlaySecondaryBackgroundDefault$delegate = l.b(new Function0() { // from class: g8.v
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlaySecondaryBackgroundDefault_delegate$lambda$36;
                controlOverlaySecondaryBackgroundDefault_delegate$lambda$36 = DarkTheme.controlOverlaySecondaryBackgroundDefault_delegate$lambda$36(resources, theme);
                return Integer.valueOf(controlOverlaySecondaryBackgroundDefault_delegate$lambda$36);
            }
        });
        this.controlOverlaySecondaryBorderDefault$delegate = l.b(new Function0() { // from class: g8.x
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlaySecondaryBorderDefault_delegate$lambda$37;
                controlOverlaySecondaryBorderDefault_delegate$lambda$37 = DarkTheme.controlOverlaySecondaryBorderDefault_delegate$lambda$37(resources, theme);
                return Integer.valueOf(controlOverlaySecondaryBorderDefault_delegate$lambda$37);
            }
        });
        this.controlOverlaySecondaryTextDefault$delegate = l.b(new Function0() { // from class: g8.y
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlaySecondaryTextDefault_delegate$lambda$38;
                controlOverlaySecondaryTextDefault_delegate$lambda$38 = DarkTheme.controlOverlaySecondaryTextDefault_delegate$lambda$38(resources, theme);
                return Integer.valueOf(controlOverlaySecondaryTextDefault_delegate$lambda$38);
            }
        });
        this.controlPrimaryBackgroundActive$delegate = l.b(new Function0() { // from class: g8.z
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlPrimaryBackgroundActive_delegate$lambda$39;
                controlPrimaryBackgroundActive_delegate$lambda$39 = DarkTheme.controlPrimaryBackgroundActive_delegate$lambda$39(resources, theme);
                return Integer.valueOf(controlPrimaryBackgroundActive_delegate$lambda$39);
            }
        });
        this.controlPrimaryBackgroundDefault$delegate = l.b(new Function0() { // from class: g8.b0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlPrimaryBackgroundDefault_delegate$lambda$40;
                controlPrimaryBackgroundDefault_delegate$lambda$40 = DarkTheme.controlPrimaryBackgroundDefault_delegate$lambda$40(resources, theme);
                return Integer.valueOf(controlPrimaryBackgroundDefault_delegate$lambda$40);
            }
        });
        this.controlPrimaryBorderDefault$delegate = l.b(new Function0() { // from class: g8.c0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlPrimaryBorderDefault_delegate$lambda$41;
                controlPrimaryBorderDefault_delegate$lambda$41 = DarkTheme.controlPrimaryBorderDefault_delegate$lambda$41(resources, theme);
                return Integer.valueOf(controlPrimaryBorderDefault_delegate$lambda$41);
            }
        });
        this.controlPrimaryTextDefault$delegate = l.b(new Function0() { // from class: g8.d0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlPrimaryTextDefault_delegate$lambda$42;
                controlPrimaryTextDefault_delegate$lambda$42 = DarkTheme.controlPrimaryTextDefault_delegate$lambda$42(resources, theme);
                return Integer.valueOf(controlPrimaryTextDefault_delegate$lambda$42);
            }
        });
        this.controlSecondaryBackgroundActive$delegate = l.b(new Function0() { // from class: g8.e0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryBackgroundActive_delegate$lambda$43;
                controlSecondaryBackgroundActive_delegate$lambda$43 = DarkTheme.controlSecondaryBackgroundActive_delegate$lambda$43(resources, theme);
                return Integer.valueOf(controlSecondaryBackgroundActive_delegate$lambda$43);
            }
        });
        this.controlSecondaryBackgroundDefault$delegate = l.b(new Function0() { // from class: g8.f0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryBackgroundDefault_delegate$lambda$44;
                controlSecondaryBackgroundDefault_delegate$lambda$44 = DarkTheme.controlSecondaryBackgroundDefault_delegate$lambda$44(resources, theme);
                return Integer.valueOf(controlSecondaryBackgroundDefault_delegate$lambda$44);
            }
        });
        this.controlSecondaryBorderActive$delegate = l.b(new Function0() { // from class: g8.g0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryBorderActive_delegate$lambda$45;
                controlSecondaryBorderActive_delegate$lambda$45 = DarkTheme.controlSecondaryBorderActive_delegate$lambda$45(resources, theme);
                return Integer.valueOf(controlSecondaryBorderActive_delegate$lambda$45);
            }
        });
        this.controlSecondaryBorderDefault$delegate = l.b(new Function0() { // from class: g8.i0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryBorderDefault_delegate$lambda$46;
                controlSecondaryBorderDefault_delegate$lambda$46 = DarkTheme.controlSecondaryBorderDefault_delegate$lambda$46(resources, theme);
                return Integer.valueOf(controlSecondaryBorderDefault_delegate$lambda$46);
            }
        });
        this.controlSecondaryTextDefault$delegate = l.b(new Function0() { // from class: g8.j0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryTextDefault_delegate$lambda$47;
                controlSecondaryTextDefault_delegate$lambda$47 = DarkTheme.controlSecondaryTextDefault_delegate$lambda$47(resources, theme);
                return Integer.valueOf(controlSecondaryTextDefault_delegate$lambda$47);
            }
        });
        this.embedBackground$delegate = l.b(new Function0() { // from class: g8.k0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int embedBackground_delegate$lambda$48;
                embedBackground_delegate$lambda$48 = DarkTheme.embedBackground_delegate$lambda$48(resources, theme);
                return Integer.valueOf(embedBackground_delegate$lambda$48);
            }
        });
        this.iconFeedbackCritical$delegate = l.b(new Function0() { // from class: g8.l0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackCritical_delegate$lambda$49;
                iconFeedbackCritical_delegate$lambda$49 = DarkTheme.iconFeedbackCritical_delegate$lambda$49(resources, theme);
                return Integer.valueOf(iconFeedbackCritical_delegate$lambda$49);
            }
        });
        this.iconFeedbackInfo$delegate = l.b(new Function0() { // from class: g8.n0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackInfo_delegate$lambda$50;
                iconFeedbackInfo_delegate$lambda$50 = DarkTheme.iconFeedbackInfo_delegate$lambda$50(resources, theme);
                return Integer.valueOf(iconFeedbackInfo_delegate$lambda$50);
            }
        });
        this.iconFeedbackNotification$delegate = l.b(new Function0() { // from class: g8.o0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackNotification_delegate$lambda$51;
                iconFeedbackNotification_delegate$lambda$51 = DarkTheme.iconFeedbackNotification_delegate$lambda$51(resources, theme);
                return Integer.valueOf(iconFeedbackNotification_delegate$lambda$51);
            }
        });
        this.iconFeedbackPositive$delegate = l.b(new Function0() { // from class: g8.p0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackPositive_delegate$lambda$52;
                iconFeedbackPositive_delegate$lambda$52 = DarkTheme.iconFeedbackPositive_delegate$lambda$52(resources, theme);
                return Integer.valueOf(iconFeedbackPositive_delegate$lambda$52);
            }
        });
        this.iconFeedbackWarning$delegate = l.b(new Function0() { // from class: g8.q0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackWarning_delegate$lambda$53;
                iconFeedbackWarning_delegate$lambda$53 = DarkTheme.iconFeedbackWarning_delegate$lambda$53(resources, theme);
                return Integer.valueOf(iconFeedbackWarning_delegate$lambda$53);
            }
        });
        this.inputBackgroundDefault$delegate = l.b(new Function0() { // from class: g8.r0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int inputBackgroundDefault_delegate$lambda$54;
                inputBackgroundDefault_delegate$lambda$54 = DarkTheme.inputBackgroundDefault_delegate$lambda$54(resources, theme);
                return Integer.valueOf(inputBackgroundDefault_delegate$lambda$54);
            }
        });
        this.inputBorderDefault$delegate = l.b(new Function0() { // from class: g8.t0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int inputBorderDefault_delegate$lambda$55;
                inputBorderDefault_delegate$lambda$55 = DarkTheme.inputBorderDefault_delegate$lambda$55(resources, theme);
                return Integer.valueOf(inputBorderDefault_delegate$lambda$55);
            }
        });
        this.interactiveBackgroundSelected$delegate = l.b(new Function0() { // from class: g8.u0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveBackgroundSelected_delegate$lambda$56;
                interactiveBackgroundSelected_delegate$lambda$56 = DarkTheme.interactiveBackgroundSelected_delegate$lambda$56(resources, theme);
                return Integer.valueOf(interactiveBackgroundSelected_delegate$lambda$56);
            }
        });
        this.interactiveIconActive$delegate = l.b(new Function0() { // from class: g8.v0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveIconActive_delegate$lambda$57;
                interactiveIconActive_delegate$lambda$57 = DarkTheme.interactiveIconActive_delegate$lambda$57(resources, theme);
                return Integer.valueOf(interactiveIconActive_delegate$lambda$57);
            }
        });
        this.interactiveIconDefault$delegate = l.b(new Function0() { // from class: g8.w0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveIconDefault_delegate$lambda$58;
                interactiveIconDefault_delegate$lambda$58 = DarkTheme.interactiveIconDefault_delegate$lambda$58(resources, theme);
                return Integer.valueOf(interactiveIconDefault_delegate$lambda$58);
            }
        });
        this.interactiveMuted$delegate = l.b(new Function0() { // from class: g8.x0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveMuted_delegate$lambda$59;
                interactiveMuted_delegate$lambda$59 = DarkTheme.interactiveMuted_delegate$lambda$59(resources, theme);
                return Integer.valueOf(interactiveMuted_delegate$lambda$59);
            }
        });
        this.interactiveTextActive$delegate = l.b(new Function0() { // from class: g8.z0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveTextActive_delegate$lambda$60;
                interactiveTextActive_delegate$lambda$60 = DarkTheme.interactiveTextActive_delegate$lambda$60(resources, theme);
                return Integer.valueOf(interactiveTextActive_delegate$lambda$60);
            }
        });
        this.interactiveTextDefault$delegate = l.b(new Function0() { // from class: g8.a1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveTextDefault_delegate$lambda$61;
                interactiveTextDefault_delegate$lambda$61 = DarkTheme.interactiveTextDefault_delegate$lambda$61(resources, theme);
                return Integer.valueOf(interactiveTextDefault_delegate$lambda$61);
            }
        });
        this.messageHighlightBackgroundDefault$delegate = l.b(new Function0() { // from class: g8.b1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int messageHighlightBackgroundDefault_delegate$lambda$62;
                messageHighlightBackgroundDefault_delegate$lambda$62 = DarkTheme.messageHighlightBackgroundDefault_delegate$lambda$62(resources, theme);
                return Integer.valueOf(messageHighlightBackgroundDefault_delegate$lambda$62);
            }
        });
        this.mobileAndroidButtonBackgroundRipple$delegate = l.b(new Function0() { // from class: g8.c1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int mobileAndroidButtonBackgroundRipple_delegate$lambda$63;
                mobileAndroidButtonBackgroundRipple_delegate$lambda$63 = DarkTheme.mobileAndroidButtonBackgroundRipple_delegate$lambda$63(resources, theme);
                return Integer.valueOf(mobileAndroidButtonBackgroundRipple_delegate$lambda$63);
            }
        });
        this.mobileLegacyButtonSecondaryBackgroundDefault$delegate = l.b(new Function0() { // from class: g8.e1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int mobileLegacyButtonSecondaryBackgroundDefault_delegate$lambda$64;
                mobileLegacyButtonSecondaryBackgroundDefault_delegate$lambda$64 = DarkTheme.mobileLegacyButtonSecondaryBackgroundDefault_delegate$lambda$64(resources, theme);
                return Integer.valueOf(mobileLegacyButtonSecondaryBackgroundDefault_delegate$lambda$64);
            }
        });
        this.mobileLegacyButtonSecondaryBorderDefault$delegate = l.b(new Function0() { // from class: g8.f1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int mobileLegacyButtonSecondaryBorderDefault_delegate$lambda$65;
                mobileLegacyButtonSecondaryBorderDefault_delegate$lambda$65 = DarkTheme.mobileLegacyButtonSecondaryBorderDefault_delegate$lambda$65(resources, theme);
                return Integer.valueOf(mobileLegacyButtonSecondaryBorderDefault_delegate$lambda$65);
            }
        });
        this.mobileLegacyButtonSecondaryTextDefault$delegate = l.b(new Function0() { // from class: g8.g1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int mobileLegacyButtonSecondaryTextDefault_delegate$lambda$66;
                mobileLegacyButtonSecondaryTextDefault_delegate$lambda$66 = DarkTheme.mobileLegacyButtonSecondaryTextDefault_delegate$lambda$66(resources, theme);
                return Integer.valueOf(mobileLegacyButtonSecondaryTextDefault_delegate$lambda$66);
            }
        });
        this.mobileTextHeadingPrimary$delegate = l.b(new Function0() { // from class: g8.h1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int mobileTextHeadingPrimary_delegate$lambda$67;
                mobileTextHeadingPrimary_delegate$lambda$67 = DarkTheme.mobileTextHeadingPrimary_delegate$lambda$67(resources, theme);
                return Integer.valueOf(mobileTextHeadingPrimary_delegate$lambda$67);
            }
        });
        this.redesignButtonTertiaryBackground$delegate = l.b(new Function0() { // from class: g8.i1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int redesignButtonTertiaryBackground_delegate$lambda$68;
                redesignButtonTertiaryBackground_delegate$lambda$68 = DarkTheme.redesignButtonTertiaryBackground_delegate$lambda$68(resources, theme);
                return Integer.valueOf(redesignButtonTertiaryBackground_delegate$lambda$68);
            }
        });
        this.redesignButtonTertiaryText$delegate = l.b(new Function0() { // from class: g8.j1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int redesignButtonTertiaryText_delegate$lambda$69;
                redesignButtonTertiaryText_delegate$lambda$69 = DarkTheme.redesignButtonTertiaryText_delegate$lambda$69(resources, theme);
                return Integer.valueOf(redesignButtonTertiaryText_delegate$lambda$69);
            }
        });
        this.spineDefault$delegate = l.b(new Function0() { // from class: g8.l1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int spineDefault_delegate$lambda$70;
                spineDefault_delegate$lambda$70 = DarkTheme.spineDefault_delegate$lambda$70(resources, theme);
                return Integer.valueOf(spineDefault_delegate$lambda$70);
            }
        });
        this.spoilerHiddenBackground$delegate = l.b(new Function0() { // from class: g8.m1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int spoilerHiddenBackground_delegate$lambda$71;
                spoilerHiddenBackground_delegate$lambda$71 = DarkTheme.spoilerHiddenBackground_delegate$lambda$71(resources, theme);
                return Integer.valueOf(spoilerHiddenBackground_delegate$lambda$71);
            }
        });
        this.spoilerRevealedBackground$delegate = l.b(new Function0() { // from class: g8.n1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int spoilerRevealedBackground_delegate$lambda$72;
                spoilerRevealedBackground_delegate$lambda$72 = DarkTheme.spoilerRevealedBackground_delegate$lambda$72(resources, theme);
                return Integer.valueOf(spoilerRevealedBackground_delegate$lambda$72);
            }
        });
        this.statusDanger$delegate = l.b(new Function0() { // from class: g8.p1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int statusDanger_delegate$lambda$73;
                statusDanger_delegate$lambda$73 = DarkTheme.statusDanger_delegate$lambda$73(resources, theme);
                return Integer.valueOf(statusDanger_delegate$lambda$73);
            }
        });
        this.statusPositive$delegate = l.b(new Function0() { // from class: g8.q1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int statusPositive_delegate$lambda$74;
                statusPositive_delegate$lambda$74 = DarkTheme.statusPositive_delegate$lambda$74(resources, theme);
                return Integer.valueOf(statusPositive_delegate$lambda$74);
            }
        });
        this.statusPositiveText$delegate = l.b(new Function0() { // from class: g8.r1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int statusPositiveText_delegate$lambda$75;
                statusPositiveText_delegate$lambda$75 = DarkTheme.statusPositiveText_delegate$lambda$75(resources, theme);
                return Integer.valueOf(statusPositiveText_delegate$lambda$75);
            }
        });
        this.statusWarning$delegate = l.b(new Function0() { // from class: g8.s1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int statusWarning_delegate$lambda$76;
                statusWarning_delegate$lambda$76 = DarkTheme.statusWarning_delegate$lambda$76(resources, theme);
                return Integer.valueOf(statusWarning_delegate$lambda$76);
            }
        });
        this.textBrand$delegate = l.b(new Function0() { // from class: g8.t1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textBrand_delegate$lambda$77;
                textBrand_delegate$lambda$77 = DarkTheme.textBrand_delegate$lambda$77(resources, theme);
                return Integer.valueOf(textBrand_delegate$lambda$77);
            }
        });
        this.textDefault$delegate = l.b(new Function0() { // from class: g8.u1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textDefault_delegate$lambda$78;
                textDefault_delegate$lambda$78 = DarkTheme.textDefault_delegate$lambda$78(resources, theme);
                return Integer.valueOf(textDefault_delegate$lambda$78);
            }
        });
        this.textFeedbackCritical$delegate = l.b(new Function0() { // from class: g8.v1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textFeedbackCritical_delegate$lambda$79;
                textFeedbackCritical_delegate$lambda$79 = DarkTheme.textFeedbackCritical_delegate$lambda$79(resources, theme);
                return Integer.valueOf(textFeedbackCritical_delegate$lambda$79);
            }
        });
        this.textFeedbackInfo$delegate = l.b(new Function0() { // from class: g8.x1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textFeedbackInfo_delegate$lambda$80;
                textFeedbackInfo_delegate$lambda$80 = DarkTheme.textFeedbackInfo_delegate$lambda$80(resources, theme);
                return Integer.valueOf(textFeedbackInfo_delegate$lambda$80);
            }
        });
        this.textFeedbackPositive$delegate = l.b(new Function0() { // from class: g8.y1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textFeedbackPositive_delegate$lambda$81;
                textFeedbackPositive_delegate$lambda$81 = DarkTheme.textFeedbackPositive_delegate$lambda$81(resources, theme);
                return Integer.valueOf(textFeedbackPositive_delegate$lambda$81);
            }
        });
        this.textFeedbackWarning$delegate = l.b(new Function0() { // from class: g8.a2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textFeedbackWarning_delegate$lambda$82;
                textFeedbackWarning_delegate$lambda$82 = DarkTheme.textFeedbackWarning_delegate$lambda$82(resources, theme);
                return Integer.valueOf(textFeedbackWarning_delegate$lambda$82);
            }
        });
        this.textLink$delegate = l.b(new Function0() { // from class: g8.b2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textLink_delegate$lambda$83;
                textLink_delegate$lambda$83 = DarkTheme.textLink_delegate$lambda$83(resources, theme);
                return Integer.valueOf(textLink_delegate$lambda$83);
            }
        });
        this.textMuted$delegate = l.b(new Function0() { // from class: g8.c2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textMuted_delegate$lambda$84;
                textMuted_delegate$lambda$84 = DarkTheme.textMuted_delegate$lambda$84(resources, theme);
                return Integer.valueOf(textMuted_delegate$lambda$84);
            }
        });
        this.textStrong$delegate = l.b(new Function0() { // from class: g8.d2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textStrong_delegate$lambda$85;
                textStrong_delegate$lambda$85 = DarkTheme.textStrong_delegate$lambda$85(resources, theme);
                return Integer.valueOf(textStrong_delegate$lambda$85);
            }
        });
        this.textSubtle$delegate = l.b(new Function0() { // from class: g8.e2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textSubtle_delegate$lambda$86;
                textSubtle_delegate$lambda$86 = DarkTheme.textSubtle_delegate$lambda$86(resources, theme);
                return Integer.valueOf(textSubtle_delegate$lambda$86);
            }
        });
        this.white$delegate = l.b(new Function0() { // from class: g8.f2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int white_delegate$lambda$87;
                white_delegate$lambda$87 = DarkTheme.white_delegate$lambda$87(resources, theme);
                return Integer.valueOf(white_delegate$lambda$87);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundAccent_delegate$lambda$0(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_530, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundBaseLow_delegate$lambda$1(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_600, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundBaseLower_delegate$lambda$2(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_630, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundBaseLowest_delegate$lambda$3(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_660, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundFeedbackCritical_delegate$lambda$4(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundFeedbackNotification_delegate$lambda$5(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_400, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundModMuted_delegate$lambda$6(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_mod_muted_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundModNormal_delegate$lambda$7(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_mod_normal_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundModStrong_delegate$lambda$8(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_mod_strong_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundModSubtle_delegate$lambda$9(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_mod_subtle_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundScrimLightbox_delegate$lambda$11(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_scrim_lightbox_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundScrim_delegate$lambda$10(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_scrim_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundSecondaryAlt_delegate$lambda$12(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_660, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundSurfaceHigh_delegate$lambda$13(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_800, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundSurfaceHighest_delegate$lambda$14(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_800, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int badgeBackgroundBrand_delegate$lambda$15(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.brand_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int badgeNotificationBackground_delegate$lambda$16(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_400, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int bgSurfaceRaised_delegate$lambda$17(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_560, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int borderStrong_delegate$lambda$18(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.border_strong_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int borderSubtle_delegate$lambda$19(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.border_subtle_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int cardBackgroundDefault_delegate$lambda$20(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_600, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int chatSwipeToReplyBackground_delegate$lambda$21(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_660, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int chatSwipeToReplyGradientBackground_delegate$lambda$22(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.chat_swipe_to_reply_gradient_background_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlConnectedBackgroundActive_delegate$lambda$23(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_460, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlConnectedBackgroundDefault_delegate$lambda$24(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlConnectedBorderDefault_delegate$lambda$25(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_360, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlConnectedTextDefault_delegate$lambda$26(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlCriticalPrimaryBackgroundActive_delegate$lambda$27(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_460, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlCriticalPrimaryBackgroundDefault_delegate$lambda$28(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlCriticalPrimaryBorderDefault_delegate$lambda$29(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlCriticalPrimaryTextDefault_delegate$lambda$30(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlayPrimaryBackgroundActive_delegate$lambda$31(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_230, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlayPrimaryBackgroundDefault_delegate$lambda$32(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlayPrimaryBorderDefault_delegate$lambda$33(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlayPrimaryTextDefault_delegate$lambda$34(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_860, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlaySecondaryBackgroundActive_delegate$lambda$35(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_overlay_secondary_background_active_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlaySecondaryBackgroundDefault_delegate$lambda$36(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_overlay_secondary_background_default_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlaySecondaryBorderDefault_delegate$lambda$37(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_overlay_secondary_border_default_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlaySecondaryTextDefault_delegate$lambda$38(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlPrimaryBackgroundActive_delegate$lambda$39(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.brand_560, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlPrimaryBackgroundDefault_delegate$lambda$40(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.brand_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlPrimaryBorderDefault_delegate$lambda$41(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.brand_360, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlPrimaryTextDefault_delegate$lambda$42(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryBackgroundActive_delegate$lambda$43(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryBackgroundDefault_delegate$lambda$44(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_460, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryBorderActive_delegate$lambda$45(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_secondary_border_active_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryBorderDefault_delegate$lambda$46(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_secondary_border_default_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryTextDefault_delegate$lambda$47(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_230, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int embedBackground_delegate$lambda$48(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_630, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackCritical_delegate$lambda$49(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_400, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackInfo_delegate$lambda$50(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.blue_345, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackNotification_delegate$lambda$51(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_400, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackPositive_delegate$lambda$52(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_330, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackWarning_delegate$lambda$53(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.yellow_300, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int inputBackgroundDefault_delegate$lambda$54(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_700, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int inputBorderDefault_delegate$lambda$55(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.input_border_default_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveBackgroundSelected_delegate$lambda$56(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.interactive_background_selected_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveIconActive_delegate$lambda$57(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveIconDefault_delegate$lambda$58(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_330, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveMuted_delegate$lambda$59(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveTextActive_delegate$lambda$60(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveTextDefault_delegate$lambda$61(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_330, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int messageHighlightBackgroundDefault_delegate$lambda$62(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.message_highlight_background_default_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int mobileAndroidButtonBackgroundRipple_delegate$lambda$63(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.mobile_android_button_background_ripple_dark, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int mobileLegacyButtonSecondaryBackgroundDefault_delegate$lambda$64(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_460, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int mobileLegacyButtonSecondaryBorderDefault_delegate$lambda$65(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.brand_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int mobileLegacyButtonSecondaryTextDefault_delegate$lambda$66(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int mobileTextHeadingPrimary_delegate$lambda$67(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_130, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int redesignButtonTertiaryBackground_delegate$lambda$68(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_660, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int redesignButtonTertiaryText_delegate$lambda$69(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_230, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int spineDefault_delegate$lambda$70(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_530, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int spoilerHiddenBackground_delegate$lambda$71(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_700, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int spoilerRevealedBackground_delegate$lambda$72(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_660, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int statusDanger_delegate$lambda$73(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_400, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int statusPositiveText_delegate$lambda$75(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int statusPositive_delegate$lambda$74(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_360, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int statusWarning_delegate$lambda$76(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.yellow_300, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textBrand_delegate$lambda$77(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.brand_360, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textDefault_delegate$lambda$78(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_230, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textFeedbackCritical_delegate$lambda$79(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_345, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textFeedbackInfo_delegate$lambda$80(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.blue_330, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textFeedbackPositive_delegate$lambda$81(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_330, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textFeedbackWarning_delegate$lambda$82(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.yellow_300, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textLink_delegate$lambda$83(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.blue_345, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textMuted_delegate$lambda$84(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_360, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textStrong_delegate$lambda$85(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_230, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textSubtle_delegate$lambda$86(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_330, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int white_delegate$lambda$87(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundAccent() {
        return ((Number) this.backgroundAccent$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundBaseLow() {
        return ((Number) this.backgroundBaseLow$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundBaseLower() {
        return ((Number) this.backgroundBaseLower$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundBaseLowest() {
        return ((Number) this.backgroundBaseLowest$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundFeedbackCritical() {
        return ((Number) this.backgroundFeedbackCritical$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundFeedbackNotification() {
        return ((Number) this.backgroundFeedbackNotification$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundModMuted() {
        return ((Number) this.backgroundModMuted$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundModNormal() {
        return ((Number) this.backgroundModNormal$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundModStrong() {
        return ((Number) this.backgroundModStrong$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundModSubtle() {
        return ((Number) this.backgroundModSubtle$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundScrim() {
        return ((Number) this.backgroundScrim$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundScrimLightbox() {
        return ((Number) this.backgroundScrimLightbox$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundSecondaryAlt() {
        return ((Number) this.backgroundSecondaryAlt$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundSurfaceHigh() {
        return ((Number) this.backgroundSurfaceHigh$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundSurfaceHighest() {
        return ((Number) this.backgroundSurfaceHighest$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBadgeBackgroundBrand() {
        return ((Number) this.badgeBackgroundBrand$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBadgeNotificationBackground() {
        return ((Number) this.badgeNotificationBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBgSurfaceRaised() {
        return ((Number) this.bgSurfaceRaised$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBorderStrong() {
        return ((Number) this.borderStrong$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBorderSubtle() {
        return ((Number) this.borderSubtle$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getCardBackgroundDefault() {
        return ((Number) this.cardBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getChatSwipeToReplyBackground() {
        return ((Number) this.chatSwipeToReplyBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getChatSwipeToReplyGradientBackground() {
        return ((Number) this.chatSwipeToReplyGradientBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getColor(int i10, int i11) {
        return i11;
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getColorRes(int i10, int i11) {
        return i11;
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlConnectedBackgroundActive() {
        return ((Number) this.controlConnectedBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlConnectedBackgroundDefault() {
        return ((Number) this.controlConnectedBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlConnectedBorderDefault() {
        return ((Number) this.controlConnectedBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlConnectedTextDefault() {
        return ((Number) this.controlConnectedTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlCriticalPrimaryBackgroundActive() {
        return ((Number) this.controlCriticalPrimaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlCriticalPrimaryBackgroundDefault() {
        return ((Number) this.controlCriticalPrimaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlCriticalPrimaryBorderDefault() {
        return ((Number) this.controlCriticalPrimaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlCriticalPrimaryTextDefault() {
        return ((Number) this.controlCriticalPrimaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlayPrimaryBackgroundActive() {
        return ((Number) this.controlOverlayPrimaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlayPrimaryBackgroundDefault() {
        return ((Number) this.controlOverlayPrimaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlayPrimaryBorderDefault() {
        return ((Number) this.controlOverlayPrimaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlayPrimaryTextDefault() {
        return ((Number) this.controlOverlayPrimaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlaySecondaryBackgroundActive() {
        return ((Number) this.controlOverlaySecondaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlaySecondaryBackgroundDefault() {
        return ((Number) this.controlOverlaySecondaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlaySecondaryBorderDefault() {
        return ((Number) this.controlOverlaySecondaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlaySecondaryTextDefault() {
        return ((Number) this.controlOverlaySecondaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlPrimaryBackgroundActive() {
        return ((Number) this.controlPrimaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlPrimaryBackgroundDefault() {
        return ((Number) this.controlPrimaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlPrimaryBorderDefault() {
        return ((Number) this.controlPrimaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlPrimaryTextDefault() {
        return ((Number) this.controlPrimaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlSecondaryBackgroundActive() {
        return ((Number) this.controlSecondaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlSecondaryBackgroundDefault() {
        return ((Number) this.controlSecondaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlSecondaryBorderActive() {
        return ((Number) this.controlSecondaryBorderActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlSecondaryBorderDefault() {
        return ((Number) this.controlSecondaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlSecondaryTextDefault() {
        return ((Number) this.controlSecondaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getEmbedBackground() {
        return ((Number) this.embedBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getIconFeedbackCritical() {
        return ((Number) this.iconFeedbackCritical$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getIconFeedbackInfo() {
        return ((Number) this.iconFeedbackInfo$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getIconFeedbackNotification() {
        return ((Number) this.iconFeedbackNotification$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getIconFeedbackPositive() {
        return ((Number) this.iconFeedbackPositive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getIconFeedbackWarning() {
        return ((Number) this.iconFeedbackWarning$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInputBackgroundDefault() {
        return ((Number) this.inputBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInputBorderDefault() {
        return ((Number) this.inputBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInteractiveBackgroundSelected() {
        return ((Number) this.interactiveBackgroundSelected$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInteractiveIconActive() {
        return ((Number) this.interactiveIconActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInteractiveIconDefault() {
        return ((Number) this.interactiveIconDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInteractiveMuted() {
        return ((Number) this.interactiveMuted$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInteractiveTextActive() {
        return ((Number) this.interactiveTextActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInteractiveTextDefault() {
        return ((Number) this.interactiveTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getMessageHighlightBackgroundDefault() {
        return ((Number) this.messageHighlightBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getMobileAndroidButtonBackgroundRipple() {
        return ((Number) this.mobileAndroidButtonBackgroundRipple$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getMobileLegacyButtonSecondaryBackgroundDefault() {
        return ((Number) this.mobileLegacyButtonSecondaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getMobileLegacyButtonSecondaryBorderDefault() {
        return ((Number) this.mobileLegacyButtonSecondaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getMobileLegacyButtonSecondaryTextDefault() {
        return ((Number) this.mobileLegacyButtonSecondaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getMobileTextHeadingPrimary() {
        return ((Number) this.mobileTextHeadingPrimary$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getRedesignButtonTertiaryBackground() {
        return ((Number) this.redesignButtonTertiaryBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getRedesignButtonTertiaryText() {
        return ((Number) this.redesignButtonTertiaryText$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getSpineDefault() {
        return ((Number) this.spineDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getSpoilerHiddenBackground() {
        return ((Number) this.spoilerHiddenBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getSpoilerRevealedBackground() {
        return ((Number) this.spoilerRevealedBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getStatusDanger() {
        return ((Number) this.statusDanger$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getStatusPositive() {
        return ((Number) this.statusPositive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getStatusPositiveText() {
        return ((Number) this.statusPositiveText$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getStatusWarning() {
        return ((Number) this.statusWarning$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextBrand() {
        return ((Number) this.textBrand$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextDefault() {
        return ((Number) this.textDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextFeedbackCritical() {
        return ((Number) this.textFeedbackCritical$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextFeedbackInfo() {
        return ((Number) this.textFeedbackInfo$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextFeedbackPositive() {
        return ((Number) this.textFeedbackPositive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextFeedbackWarning() {
        return ((Number) this.textFeedbackWarning$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextLink() {
        return ((Number) this.textLink$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextMuted() {
        return ((Number) this.textMuted$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextStrong() {
        return ((Number) this.textStrong$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextSubtle() {
        return ((Number) this.textSubtle$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getWhite() {
        return ((Number) this.white$delegate.getValue()).intValue();
    }
}
